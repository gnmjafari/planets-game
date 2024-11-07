/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mercury: "url('/image/planet/mercury.webp')",
        venus: "url('/image/planet/venus.webp')",
        earth: "url('/image/planet/earth.webp')",
        mars: "url('/image/planet/mars.webp')",
        jupiter: "url('/image/planet/jupiter.webp')",
        saturn: "url('/image/planet/saturn.webp')",
        uranus: "url('/image/planet/uranus.webp')",
        neptune: "url('/image/planet/neptune.webp')",
        sun: "url('/image/3d-view-sun-space.webp')",
      },
    },
  },
  plugins: [daisyui],

  daisyui: {
    themes: false,
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
