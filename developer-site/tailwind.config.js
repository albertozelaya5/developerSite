/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: [
      // Clases de color básicas
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",

      // Añadir cada componente del gradiente
      "bg-gradient-to-r",
      "from-purple-700",
      "to-blue-500",
    ],
  },

  darkMode: ["class"],
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
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
      fontFamily: {
        assistant: ["Assistant", "sans-serif"],
      },
      colors: {
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
        BG_LIGHT: "#F3F5FA",
        BG_DARK: "#ECEDF1",
        DARKTHEME: "#0F172A",
        BG_DARKER: "#E7E7E7",
        RED_LIGHT: "#BA0C2F",
        RED_DARK: "#A41F35",
        RED_DARKER: "#8B2332",
        TEXT_MUTED: "#AEAEAE",
        TEXT_LIGHT: "#353E4A",
        TEXT_DARK: "#232429",
        WHITE: "#FFFFFF",
        BLACK: "#000000",
        BG_INPUT: "#FFFFFF",
        BG_DISABLE: "#ADB5BD",
        TEXT_DISABLE: "#F8F9FA",
        NAV_TITLE: "#ADB5BD",
        NAV_TITLE_ACTIVE: "#A41F35",
        NAV_BACKGROUND: "color-mix(in srgb, lightgray 35%, #7A232E)",
        NAV_BACKGROUND_ACTIVE: "#FFFFFF",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};