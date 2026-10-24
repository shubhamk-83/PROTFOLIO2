import { useEffect, useRef } from "react";

const MouseSpotlight = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      return undefined;
    }

    const el = ref.current;

    let rafId = null;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    let targetX = x;
    let targetY = y;

    const update = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;

      if (el) {
        el.style.transform = `translate3d(${x - 220}px, ${y - 220}px, 0)`;
      }

      const stillMoving =
        Math.abs(targetX - x) > 0.5 || Math.abs(targetY - y) > 0.5;

      if (stillMoving) {
        rafId = requestAnimationFrame(update);
      } else {
        rafId = null;
      }
    };

    const onMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (rafId === null) {
        rafId = requestAnimationFrame(update);
      }
    };

    window.addEventListener("mousemove", onMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", onMove);

      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[440px] w-[440px] rounded-full opacity-60 mix-blend-screen md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.16) 0%, rgba(59,130,246,0) 70%)",
        willChange: "transform",
      }}
    />
  );
};

export default MouseSpotlight;
