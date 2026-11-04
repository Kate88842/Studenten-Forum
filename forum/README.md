# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite/tree/main/packages/plugin-react-swc) uses [SWC](https://swc.rs)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try the experimental native React Compiler support in plugin-react using `compiler: true` in the plugin options instead of the Babel plugin: [read more](https://github.com/vitejs/vite/blob/main/packages/plugin-react/README.md#rust-react-compiler).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. See [this documentation](https://oxc.rs/docs/guide/usage/linter.html#typed-linting) for more information about setting up type-aware linting.
