# Planets Game 🌌 : [Live demo](https://planets-game-eta.vercel.app/)

## Libraries Used 📚
- [**React**](https://react.dev/)
- [**Vite**](https://vite.dev/)
- [**TypeScript**](https://www.typescriptlang.org/)
- [**Dnd Kit**](https://dndkit.com/)
- [**Tailwind CSS**](https://tailwindcss.com/)
- [**DaisyUI**](https://daisyui.com/)

## Getting Started with React + TypeScript + Vite ⚛️

This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and some ESLint rules.

### Official Plugins
Currently, two official plugins are available for a better development experience:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**: Uses [Babel](https://babeljs.io/) for Fast Refresh.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**: Uses [SWC](https://swc.rs/) for Fast Refresh.

## Expanding the ESLint Configuration ⚙️

For production applications, it is recommended to enhance your ESLint configuration to enable type-aware lint rules. Here’s how to do it:

1. **Configure the top-level `parserOptions`:**
   ```js
   export default tseslint.config({
     languageOptions: {
       parserOptions: {
         project: ['./tsconfig.node.json', './tsconfig.app.json'],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   });
