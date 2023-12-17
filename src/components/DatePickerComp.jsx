import React from 'react';

export default function DatePickerComp() {
  return (
    <div className='surface-ground px-4 py-5 md:px-6 lg:px-8'>
      <div className='flex flex-column md:flex-row gap-3 md:align-items-center bg-primary border-round-xl p-3'>
        <div className='flex flex-column align-items-center md:w-8rem'>
          <button className='p-button p-button-icon-only p-button-rounded p-button-sm bg-primary'>
            <span className='p-button-icon pi pi-chevron-up' />
          </button>
          <div className='flex flex-column align-items-center'>
            <span className='block mb-1 text-3xl font-semibold'>15</span>
            <span className='mt-0'>December</span>
          </div>
          <button className='p-button p-button-icon-only p-button-rounded p-button-sm bg-primary'>
            <span className='p-button-icon pi pi-chevron-down' />
          </button>
        </div>
        <div className='flex-1 gap-3 flex flex-column sm:flex-row'>
          <div className='flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md'>
            <div className='text-center'>
              <i className='pi pi-eye text-4xl mb-2' />
              <div className='text-sm font-semibold mb-2'>VIEWS</div>
              <span className='font-semibold'>6000</span>
            </div>
          </div>
          <div className='flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md'>
            <div className='text-center'>
              <i className='pi pi-users text-4xl mb-2' />
              <div className='text-sm font-semibold mb-2'>FOLLOWS</div>
              <span className='font-semibold'>60</span>
            </div>
          </div>
          <div className='flex-1 flex justify-content-center align-items-center bg-primary-400 shadow-1 p-3 border-round-md'>
            <div className='text-center'>
              <i className='pi pi-heart text-4xl mb-2' />
              <div className='text-sm font-semibold mb-2'>LIKES</div>
              <span className='font-semibold'>600</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
