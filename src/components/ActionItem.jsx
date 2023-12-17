import React from 'react';

export default function ActionItem({ title }) {
  return (
    <>
      <div className='px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center'>
        <div className='surface-card border-round shadow-2 p-4'>
          <div className='text-900 font-medium mb-2 text-xl'>
            Title Placeholder {title}
          </div>
          <p className='mt-0 mb-4 p-0 line-height-3'>
            Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus
            in hac habitasse platea dictumst.
          </p>
          <div className='flex mb-4 flex-column lg:flex-row'>
            <div className='surface-50 p-3 flex-auto'>
              <div className='text-600 mb-3'>Guests</div>
              <span className='text-blue-600 font-medium text-xl'>4</span>
            </div>
            <div className='surface-50 p-3 flex-auto mx-0 my-3 lg:my-0 lg:mx-3'>
              <div className='text-600 mb-3'>Date</div>
              <span className='text-blue-600 font-medium text-xl'>
                24/05/2021
              </span>
            </div>
            <div className='surface-50 p-3 flex-auto'>
              <div className='text-600 mb-3'>Time</div>
              <span className='text-blue-600 font-medium text-xl'>14:30</span>
            </div>
          </div>
          <button
            aria-label='Confirm Reservation'
            className='p-button p-component'
          >
            <span className='p-button-icon p-c p-button-icon-left pi pi-check' />
            <span className='p-button-label p-c'>Confirm Reservation</span>
            <span
              role='presentation'
              className='p-ink'
              style={{ height: '225.969px', width: '225.969px' }}
            />
          </button>
        </div>
      </div>
      {/* UI 1 */}
      <div className='px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center'>
        <div className='surface-card border-round shadow-2 p-4 text-center'>
          <img
            src='https://blocks.primereact.org/demo/images/blocks/illustration/subscribe.svg'
            alt='subscribe'
            className='mx-auto block mb-4'
          />
          <div className='text-900 font-medium mb-2 text-xl'>
            Title Placeholder
          </div>
          <p className='mt-0 mb-4 p-0 line-height-3'>
            Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus
            in hac habitasse platea dictumst.
          </p>
          <button
            aria-label='Learn More'
            className='p-button p-component p-button-rounded'
          >
            <span className='p-button-icon p-c p-button-icon-right pi pi-arrow-right' />
            <span className='p-button-label p-c'>Learn More</span>
            <span
              role='presentation'
              className='p-ink'
              style={{ height: '153.062px', width: '153.062px' }}
            />
          </button>
        </div>
      </div>
      {/* UI 2  */}
      <div className='px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center'>
        <div className='surface-card border-round flex shadow-2'>
          <div className='bg-blue-50  flex align-items-center justify-content-center py-3 px-5'>
            <img
              src='https://blocks.primereact.org/demo/images/blocks/illustration/live-collaboration.svg'
              alt='Image'
              className='mx-auto block mb-4 w-full'
            />
          </div>
          <div className='py-3 px-5 flex flex-column align-items-start'>
            <div className='text-900 font-medium mb-2 text-xl'>
              Title Placeholder
            </div>
            <p className='mt-0 mb-4 p-0 line-height-3'>
              Nunc mi ipsum faucibus vitae aliquet nec.
            </p>
            <button
              aria-label='Proceed'
              className='p-button p-component mt-auto'
            >
              <span className='p-button-label p-c'>Proceed</span>
              <span
                role='presentation'
                className='p-ink'
                style={{ height: '106.328px', width: '106.328px' }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Nesw Item iPhone */}
    </>
  );
}
