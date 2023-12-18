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
