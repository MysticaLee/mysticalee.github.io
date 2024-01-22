# Overview

WIP

## Tech Stack

### Frontend

<img alt="ViteJS Icon" src="https://raw.githubusercontent.com/devicons/devicon/develop/icons/vitejs/vitejs-original.svg" height=50 /><img alt="ReactJS Icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" height=50 /><img alt="TypeScript Icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" height=50 />

### Styles

<img alt="TailwindCSS Icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" height=50 />

## Setup

To get the most recent changes and dependencies:

```bash
git pull
npm install

To run the development server locally:

```bash
npm run dev
```

## HMR and ESLint Rules

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
