# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- @v PluginReact uses Babel for Fast Refresh
- @v PluginReactSWC uses SWC for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level parserOptions property like this:

```jc
export default {

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
export default {
  // other stuff ...
}
```

```js
  install eslint-plugin-react and add the plugins to the extends list
```

## Huncar el repositorio

Clone el repositorio:

```
bash
git clone https://github.com/SilvioSP2/TPFasico-React.git
cd TPBasicoReact
```

## Instalar las dependencias


```
bash
npm install
```

## Ejecutar la applicacion (desarrollar)


```
bash
npm start
```

## Abrir la aplicacion en el navegador

La aplicacion estara disponible en http://localhost:3000.
