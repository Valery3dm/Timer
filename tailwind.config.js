/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto Flex", "sans-serif"]
    },
    extend: {
      textColor: {
        skin: {
          base: "var(--text-color)",
        }
      },
      backgroundColor: {
        skin: {
          fill: "var(--fill-color)",
          fillBlackout: "var(--fill-blackout)",
          fillElement: "var(--fill-color-element)",
          fillController: "var(--fill-color-controller)",
          fillToggleButton: "var(--fill-color-toggle-button)"
        }
      },
      borderColor: {
        skin: {
          base: "var(--border-color)",
          inputColor: 'var(--border-input-color)'
        }
      },
    },
  },
  plugins: [],
}

