# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React Prime and Prime Flex Setup for react project

```jsx
// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import 'primereact/resources/themes/lara-light-cyan/theme.css';
import '/node_modules/primeflex/primeflex.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

# Install dependency

`npm install primereact`<br>
`import "primereact/resources/themes/lara-light-cyan/theme.css";`<br><br>
`npm i primeflex`<br>
`/node_modules/primeflex/primeflex.css;`<br><br>
`npm install primeicons`<br>
`import 'primeicons/primeicons.css';`<br><br>

# Import docs link

`https://primereact.org/button/`<br>
`https://primeflex.org/fontsize`<br>
`https://primereact.org/icons/` <br>
