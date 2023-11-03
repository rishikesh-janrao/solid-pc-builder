/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        blackish: {
          primary: "#000000",
          secondary: "#e31837",
          accent: "#eef2f7",
          neutral: "#3d4c5d",
          "base-100": "#343b42",
          info: "#c5e9ff",
          success: "#a7f3d0",
          warning: "#fde68a",
          error: "#ffbac4",
          banner: "#E5E7EB",
        },
        skyish: {
          primary: "#0069a7",
          secondary: "#eef2f7",
          accent: "#e31837",
          banner: "#343b42",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
