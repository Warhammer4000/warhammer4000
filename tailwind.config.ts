import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        retro: {
          black: "#2c2137",
          white: "#fbf5ef",
          red: "#ef4e4e",
          blue: "#2b4e7c",
          yellow: "#ffd93d",
          green: "#43b581",
          purple: "#6f42c1",
          gray: "#6e6a86"
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "cursive"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pixel-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        flicker: {
          '0%': { opacity: '0.97' },
          '5%': { opacity: '0.95' },
          '10%': { opacity: '0.9' },
          '15%': { opacity: '0.85' },
          '20%': { opacity: '0.95' },
          '25%': { opacity: '0.85' },
          '30%': { opacity: '0.9' },
          '35%': { opacity: '0.95' },
          '40%': { opacity: '0.85' },
          '45%': { opacity: '0.9' },
          '50%': { opacity: '0.95' },
          '55%': { opacity: '0.85' },
          '60%': { opacity: '0.9' },
          '65%': { opacity: '0.95' },
          '70%': { opacity: '0.9' },
          '75%': { opacity: '0.85' },
          '80%': { opacity: '0.9' },
          '85%': { opacity: '0.95' },
          '90%': { opacity: '0.9' },
          '95%': { opacity: '0.85' },
          '100%': { opacity: '0.9' }
        },
        noise: {
          '0%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-5%)' },
          '20%': { transform: 'translate(-10%,5%)' },
          '30%': { transform: 'translate(5%,-10%)' },
          '40%': { transform: 'translate(-5%,15%)' },
          '50%': { transform: 'translate(-10%,5%)' },
          '60%': { transform: 'translate(15%,0)' },
          '70%': { transform: 'translate(0,10%)' },
          '80%': { transform: 'translate(-15%,0)' },
          '90%': { transform: 'translate(10%,5%)' },
          '100%': { transform: 'translate(5%,0)' },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        float: "float 3s ease-in-out infinite",
        "pixel-spin": "pixel-spin 2s steps(8) infinite",
        'crt-flicker': 'flicker 0.15s infinite',
        'noise-animation': 'noise 0.2s infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
