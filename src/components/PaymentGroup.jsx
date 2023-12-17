import React from 'react';

export default function PaymentGroup() {
  return (
    <div className='surface-ground px-4 py-8 md:px-6 lg:px-8'>
      <div className='text-900 text-xl font-medium mb-3 text-center'>
        Payment Methods
      </div>
      <p className='text-700 mt-0 mb-4 text-center'>
        In tellus integer feugiat scelerisque varius morbi.
      </p>
      <div className='grid'>
        <div className='col-12 lg:col-6 p-3'>
          <div
            className='shadow-2 surface-card p-4 border-2 border-transparent cursor-pointer'
            style={{ borderRadius: 10 }}
          >
            <div className='flex align-items-center mb-4'>
              <div className='mr-3'>
                <span
                  className='inline-flex justify-content-center align-items-center bg-indigo-100'
                  style={{ borderRadius: 4, width: 45, height: 45 }}
                >
                  <i className='pi pi-credit-card text-2xl text-indigo-600' />
                </span>
              </div>
              <div>
                <span className='text-900 text-xl mb-2 font-medium'>
                  Credit Card
                </span>
                <p className='m-0 text-600 font-medium text-sm'>
                  Magna fermentum iaculis
                </p>
              </div>
              <div className='p-radiobutton p-component ml-auto'>
                <div className='p-hidden-accessible'>
                  <input type='radio' name='payment' />
                </div>
                <div className='p-radiobutton-box'>
                  <div className='p-radiobutton-icon' />
                </div>
              </div>
            </div>
            <p className='text-600 m-0 line-height-3'>
              Nunc consequat interdum varius sit. Commodo odio aenean sed
              adipiscing diam donec adipiscing tristique risus.
            </p>
          </div>
        </div>
        <div className='col-12 lg:col-6 p-3'>
          <div
            className='shadow-2 surface-card p-4 border-2 border-transparent cursor-pointer border-blue-500'
            style={{ borderRadius: 10 }}
          >
            <div className='flex align-items-center mb-4'>
              <div className='mr-3'>
                <span
                  className='inline-flex justify-content-center align-items-center bg-blue-100'
                  style={{ borderRadius: 4, width: 45, height: 45 }}
                >
                  <img
                    src='https://blocks.primereact.org/demo/images/blocks/logos/paypal.svg'
                    alt='paypal'
                    style={{ height: '1.5rem' }}
                  />
                </span>
              </div>
              <div>
                <span className='text-900 text-xl mb-2 font-medium'>
                  PayPal
                </span>
                <p className='m-0 text-600 font-medium text-sm'>
                  Nibh sit amet
                </p>
              </div>
              <div className='p-radiobutton p-component p-radiobutton-checked ml-auto'>
                <div className='p-hidden-accessible'>
                  <input type='radio' name='payment' defaultChecked='' />
                </div>
                <div className='p-radiobutton-box p-highlight'>
                  <div className='p-radiobutton-icon' />
                </div>
              </div>
            </div>
            <p className='text-600 m-0 line-height-3'>
              Est pellentesque elit ullamcorper dignissim. Tortor condimentum
              lacinia quis vel eros. Pharetra magna ac placerat vestibulum
              lectus mauris ultrices.
            </p>
          </div>
        </div>
        <div className='col-12 lg:col-6 p-3'>
          <div
            className='shadow-2 surface-card p-4 border-2 border-transparent cursor-pointer'
            style={{ borderRadius: 10 }}
          >
            <div className='flex align-items-center mb-4'>
              <div className='mr-3'>
                <span
                  className='inline-flex justify-content-center align-items-center bg-green-100'
                  style={{ borderRadius: 4, width: 45, height: 45 }}
                >
                  <i className='pi pi-money-bill text-2xl text-green-600' />
                </span>
              </div>
              <div>
                <span className='text-900 text-xl mb-2 font-medium'>
                  Wire Transfer
                </span>
                <p className='m-0 text-600 font-medium text-sm'>
                  Ornare lectus sit
                </p>
              </div>
              <div className='p-radiobutton p-component ml-auto'>
                <div className='p-hidden-accessible'>
                  <input type='radio' name='payment' />
                </div>
                <div className='p-radiobutton-box'>
                  <div className='p-radiobutton-icon' />
                </div>
              </div>
            </div>
            <p className='text-600 m-0 line-height-3'>
              Eget nunc lobortis mattis aliquam. Dictumst vestibulum rhoncus est
              pellentesque elit ullamcorper dignissim.
            </p>
          </div>
        </div>
        <div className='col-12 lg:col-6 p-3'>
          <div
            className='shadow-2 surface-card p-4 border-2 border-transparent cursor-pointer'
            style={{ borderRadius: 10 }}
          >
            <div className='flex align-items-center mb-4'>
              <div className='mr-3'>
                <span
                  className='inline-flex justify-content-center align-items-center bg-orange-100'
                  style={{ borderRadius: 4, width: 45, height: 45 }}
                >
                  <img
                    src='https://blocks.primereact.org/demo/images/blocks/logos/bitcoin.svg'
                    alt='bitcoin'
                    style={{ height: '1.5rem' }}
                  />
                </span>
              </div>
              <div>
                <span className='text-900 text-xl mb-2 font-medium'>
                  BitCoin
                </span>
                <p className='m-0 text-600 font-medium text-sm'>
                  Donec adipiscing tristique
                </p>
              </div>
              <div className='p-radiobutton p-component ml-auto'>
                <div className='p-hidden-accessible'>
                  <input type='radio' name='payment' />
                </div>
                <div className='p-radiobutton-box'>
                  <div className='p-radiobutton-icon' />
                </div>
              </div>
            </div>
            <p className='text-600 m-0 line-height-3'>
              Pharetra magna ac placerat vestibulum lectus mauris ultrices. Nec
              dui nunc mattis enim ut tellus elementum sagittis vitae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
