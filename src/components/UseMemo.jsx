import React, { useEffect, useState, useMemo } from 'react';
import { Button } from 'primereact/button';

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    complexCalc();
    setCount((prev) => prev + 1);
  };

  const complexCalc = (count) => {
    console.log('count value', count);
    for (let index = 0; index < 1000000000; index++) {}
    return count;
  };

  // Avoid re-render to use useMemo
  const processCount = useMemo(() => {
    return complexCalc(count);
  }, [count]);

  // const processCount = complexCalc(count);

  return (
    <>
      <div className='px-4 py-8 md:px-6 lg:px-8 flex gap-2 justify-content-center align-items-center'>
        <div className='surface-card w-6 sm:w-max border-round shadow-2 p-4'>
          <p className='text-center text-6xl font-bold'>
            Count : {processCount}
          </p>
          <p className='text-center font-bold'>
            {toggle ? 'Hi! Welcome. 😀' : 'Toggle to see the message!'}
          </p>
          <div className='card flex gap-4  justify-content-center'>
            <Button label='Update Counter' onClick={handelClick} />
            <Button
              label='Click Here'
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
