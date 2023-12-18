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

## https://xerosource.com/why-api-is-called-twice-in-react/

## Prevent twice api call react useEffect

```jsx
// Approcah to prevent api call twice working and test
useEffect(() => {
  const todo = async () => {
    const resp = await axios.get(apiurl);
    console.log(resp.data);
  };
  return todo;
}, []);
```

## Handel the state correct way with previous value

```jsx
import React, { useState } from 'react';
import { Button } from 'primereact/button';
export default function DemoOne() {
  const [counter, setCounter] = useState(0);

  const handelClick = () => {
    // Get and update with the latest value and increase with 4 times
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);

    // Unable to update the latest value
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
  };

  return (
    <div className='px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center'>
      <div className='surface-card w-6 border-round shadow-2 p-4'>
        <p className='text-center '>{counter}</p>
        <div className='card flex justify-content-center'>
          <Button onClick={handelClick} label='Submit' />
        </div>
      </div>
    </div>
  );
}
```

## Conditional rendering with single return

```jsx
import React, { useState } from 'react';
import { Button } from 'primereact/button';
export default function DemoOne({ Id }) {
  const [something, setSomething] = useState('Hello World App!');

  return (
    <div className='px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center'>
      <div className='surface-card w-6 border-round shadow-2 p-4'>
        {!Id ? (
          <p className='text-center font-bold'>No Id provided! 😎 </p>
        ) : (
          <>
            <p className='text-center font-bold'>{something}</p>
            <p className='text-center font-bold'>Post Id : {Id}</p>
            <div className='card flex justify-content-center'>
              <Button label='Check Post' />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
```

## Updating the Object state

```jsx
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
export default function DemoOne() {
  const [user, setUser] = useState({ name: '', company: '', age: 0 });

  // log user object
  console.log(user);

  const handelChange = (e) => {
    // Update the user object with previous value
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className='px-4 py-8 md:px-6 lg:px-8 flex gap-2 justify-content-center align-items-center'>
      <div className='surface-card w-6 border-round shadow-2 p-4'>
        <div className='card flex py-2 flex-wrap justify-content-center gap-3'>
          <span className='p-input-icon-left'>
            <i className='pi pi-search' />
            <InputText
              placeholder='Customer Name'
              onChange={handelChange}
              name='name'
            />
          </span>

          <span className='p-input-icon-right'>
            <i className='pi pi-spin pi-spinner' />
            <InputText
              placeholder='Company'
              onChange={handelChange}
              name='company'
            />
          </span>
        </div>
        <div className='card flex justify-content-center'>
          <Button label='Create User' />
        </div>
      </div>
      <div className='surface-card w-6 border-round shadow-2 p-4'>
        <p className='text-center font-bold'>{user.name}</p>
        <p className='text-center font-bold'>{user.company}</p>
        <div className='card flex justify-content-center'>
          <Button label='Check Post' />
        </div>
      </div>
    </div>
  );
}
```

## Information can be derived from state/props

```jsx
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const PRICE_PER_ITEM = 5;

export default function DemoOne() {
  const [quantity, setQuantity] = useState(1);
  // Calculate total price
  const totalPrice = quantity * PRICE_PER_ITEM;
  console.log(quantity);
  const handelChange = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className='px-4 py-8 md:px-6 lg:px-8 flex gap-2 justify-content-center align-items-center'>
      <div className='surface-card w-6 border-round shadow-2 p-4'>
        <p className='text-center font-bold'>Total Price : {totalPrice} /-</p>
        <div className='card flex justify-content-center'>
          <Button onClick={handelChange} label={`Add Item ${quantity}`} />
        </div>
      </div>
    </div>
  );
}
```
