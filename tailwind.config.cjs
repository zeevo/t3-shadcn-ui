/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      scale: {
        15: "0.15",
      },
      colors: {
        bg: { light: "hsl(206, 100%, 99.2%)", dark: "hsl(212, 35.0%, 9.2%)" },
        subtleBg: {
          light: "hsl(210, 100%, 98.0%)",
          dark: "hsl(216, 50.0%, 11.8%)",
        },
        uiBg: {
          light: "hsl(209, 100%, 96.5%)",
          dark: "hsl(214, 59.4%, 15.3%)",
        },
        uiHovered: {
          light: "hsl(210, 98.8%, 94.0%)",
          dark: "hsl(214, 65.8%, 17.9%)",
        },
        uiActive: {
          light: "hsl(209, 95.0%, 90.1%)",
          dark: "hsl(213, 71.2%, 20.2%)",
        },
        subtle: {
          light: "hsl(209, 81.2%, 84.5%)",
          dark: "hsl(212, 77.4%, 23.1%)",
        },
        uiBorder: {
          light: "hsl(208, 77.5%, 76.9%)",
          dark: "hsl(211, 85.1%, 27.4%)",
        },
        uiHover: {
          light: "hsl(206, 81.9%, 65.3%)",
          dark: "hsl(211, 89.7%, 34.1%)",
        },
        solid: {
          light: "hsl(206, 100%, 50.0%)",
          dark: "hsl(206, 100%, 50.0%)",
        },
        solidHover: {
          light: "hsl(208, 100%, 47.3%)",
          dark: "hsl(209, 100%, 60.6%)",
        },
        lowContrastText: {
          light: "hsl(211, 100%, 43.2%)",
          dark: "hsl(210, 100%, 66.1%)",
        },
        highContrastText: {
          light: "hsl(211, 100%, 15.0%)",
          dark: "hsl(206, 98.0%, 95.8%)",
        },
        subtext: {
          light: "hsl(206, 6.0%, 43.5%)",
          dark: "hsl(206, 6.0%, 63.0%)",
        },
        text: { light: "hsl(206, 24.0%, 9.0%)", dark: "hsl(210, 6.0%, 93.0%)" },
      },
    },
  },
  plugins: [],
};
