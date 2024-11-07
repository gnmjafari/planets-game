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
        mercury: "url('/image/planet/mercury.png')",
        venus: "url('/image/planet/venus.png')",
        earth: "url('/image/planet/earth.png')",
        mars: "url('/image/planet/mars.png')",
        jupiter: "url('/image/planet/jupiter.png')",
        saturn: "url('/image/planet/saturn.png')",
        uranus: "url('/image/planet/uranus.png')",
        neptune: "url('/image/planet/neptune.png')",
        sun: "url('/image/3d-view-sun-space.jpg')",
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
