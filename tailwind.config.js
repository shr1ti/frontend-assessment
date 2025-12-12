/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#f1fbfc",
          100: "#e2f6f8",
          200: "#CDECF0",
          300: "#9FDDE3",
          400: "#66c9d3",
          600: "#1f5560",
          700: "#164a50",
        },
        card: "#eaf9fb"
      },
      fontFamily: {
        serifHeading: ["Playfair Display", "serif"],
        ui: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 8px 30px rgba(10,20,30,0.08)",
        inner: "inset 0 1px 0 rgba(255,255,255,0.6)"
      },
      borderRadius: {
        xl2: "28px",
        giant: "56px"
      }
    }
  },
  plugins: []
};
