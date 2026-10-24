import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCursor } from "../context/CursorContext";

const CustomCursor = () => {
  const { variant, label } = useCursor();

  const [isDown, setIsDown] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, {
    damping: 28,
    stiffness: 320,
    mass: 0.5,
  });

  const ringY = useSpring(mouseY, {
    damping: 28,
    stiffness: 320,
    mass: 0.5,
  });

  const stretch = useMotionValue(1);
  const angle = useMotionValue(0);

  const scaleX = useTransform(stretch, (value) => value);

  const lastPos = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      return undefined;
    }

    const onMove = (event) => {
      const { clientX, clientY } = event;

      if (!visible) {
        setVisible(true);
      }

      const dx = clientX - lastPos.current.x;
      const dy = clientY - lastPos.current.y;

      const distance = Math.hypot(dx, dy);

      const speed = Math.min(distance / 12, 1);

      stretch.set(1 + speed * 0.5);

      if (distance > 0.5) {
        angle.set(Math.atan2(dy, dx) * (180 / Math.PI));
      }
      lastPos.current = {
        x: clientX,
        y: clientY,
      };

      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    const onDown = () => {
      setIsDown(true);
    };

    const onUp = () => {
      setIsDown(false);
    };

    const onLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", onMove, {
      passive: true,
    });

    window.addEventListener("mousedown", onDown);

    window.addEventListener("mouseup", onUp);

    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);

      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [mouseX, mouseY, stretch, angle, visible]);

  const isLink = variant === "link";
  const isView = variant === "view";

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[100] hidden md:block transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"
        }`}>
      <motion.div
        className="cursor-dot pointer-events-none fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-accent"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      <motion.div
        className="cursor-ring pointer-events-none fixed left-0 top-0 flex items-center justify-center rounded-full border border-accent/70"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          rotate: angle,
          scaleX,
        }}
        animate={{
          width: isLink || isView ? 72 : isDown ? 28 : 40,
          height: isLink || isView ? 72 : isDown ? 28 : 40,
          backgroundColor:
            isLink || isView ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0)",
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}>
        {isView && (
          <span className="text-[10px] font-display uppercase tracking-widest text-white">
            {label || "View"}
          </span>
        )}
      </motion.div>
    </div>
  );
};

export default CustomCursor;
