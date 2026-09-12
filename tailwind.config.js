/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: "#050505",
        surface: "#0b0c0f",
        panel: "#101114",
        line: "rgba(255,255,255,0.08)",
        ink: "#f5f6f7",
        mute: "#9aa0aa",
        accent: {
          DEFAULT: "#3B82F6",
          soft: "#60A5FA",
          dim: "#1E3A8A",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Manrope", "sans-serif"],
        sans: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        aurora:
          "radial-gradient(60% 60% at 20% 20%, rgba(59,130,246,0.25) 0%, rgba(5,5,5,0) 60%), radial-gradient(50% 50% at 80% 30%, rgba(96,165,250,0.18) 0%, rgba(5,5,5,0) 60%), radial-gradient(60% 60% at 50% 90%, rgba(59,130,246,0.12) 0%, rgba(5,5,5,0) 60%)",
        noise:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.35)",
        "glow-lg": "0 0 80px rgba(59,130,246,0.25)",
        card: "0 8px 30px rgba(0,0,0,0.5)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "spin-slow": "spin 14s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 8s ease-in-out infinite 1s",
        blob: "blob 12s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        blob: {
          "0%, 100%": {
            borderRadius: "42% 58% 65% 35% / 45% 45% 55% 55%",
            transform: "rotate(0deg)",
          },
          "50%": {
            borderRadius: "60% 40% 30% 70% / 55% 65% 35% 45%",
            transform: "rotate(20deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
