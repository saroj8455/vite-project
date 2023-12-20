import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';

export default function UseMemo() {
  return (
    <>
      <div className='px-4 py-8 md:px-6 lg:px-8 flex gap-2 justify-content-center align-items-center'>
        <div className='surface-card w-6 sm:w-max border-round shadow-2 p-4'>
          <p className='text-center text-6xl font-bold'>Hello World App!</p>
          <p className='text-center font-bold'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
            dicta?
          </p>
          <div className='card flex justify-content-center'>
            <Button label='Click Here' />
          </div>
        </div>
      </div>
    </>
  );
}
