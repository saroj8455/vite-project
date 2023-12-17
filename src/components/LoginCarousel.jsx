import React from 'react';

export default function LoginCarousel() {
  return (
    <div className='surface-ground px-4 py-8 md:px-6 lg:px-8'>
      <div className='flex flex-wrap shadow-2'>
        <div className='w-full lg:w-6 px-0 py-4 lg:p-7 bg-blue-50'>
          <img
            src='https://blocks.primereact.org/demo/images/blocks/logos/bastion-700.svg'
            alt='Image'
            height={35}
            className='mb-6'
          />
          {/* <div
            className='p-carousel p-component p-carousel-horizontal'
            pr_id_3=''
          >
            <div className='p-carousel-content'>
              <div className='p-carousel-container'>
                <button
                  type='button'
                  className='p-carousel-prev p-link'
                  aria-label='Previous Page'
                >
                  <svg
                    width={14}
                    height={14}
                    viewBox='0 0 14 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='p-icon p-carousel-prev-icon'
                    aria-hidden='true'
                  >
                    <path
                      d='M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z'
                      fill='currentColor'
                    />
                  </svg>
                  <span
                    role='presentation'
                    className='p-ink'
                    style={{
                      height: 32,
                      width: 32,
                      top: '-0.179688px',
                      left: '-11px',
                    }}
                  />
                </button>
                <div
                  className='p-carousel-items-content'
                  style={{ height: 'auto' }}
                >
                  <div
                    className='p-carousel-items-container p-items-hidden'
                    style={{ transform: 'translate3d(-100%, 0px, 0px)' }}
                  >
                    <div className='p-carousel-item'>
                      <div className='text-center mb-8'>
                        <img
                          src='https://blocks.primereact.org/demo/images/blocks/illustration/live-collaboration.svg'
                          alt='Image'
                          className='mb-6 w-6'
                        />
                        <div className='mx-auto font-medium text-xl mb-4 text-blue-900'>
                          Unlimited Inbox
                        </div>
                        <p className='m-0 text-blue-700 line-height-3'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                    <div className='p-carousel-item p-carousel-item-active p-carousel-item-start p-carousel-item-end'>
                      <div className='text-center mb-8'>
                        <img
                          src='/demo/images/blocks/illustration/security.svg'
                          alt='Image'
                          className='mb-6 w-6'
                        />
                        <div className='mx-auto font-medium text-xl mb-4 text-blue-900'>
                          Data Security
                        </div>
                        <p className='m-0 text-blue-700 line-height-3'>
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </p>
                      </div>
                    </div>
                    <div className='p-carousel-item'>
                      <div className='text-center mb-8'>
                        <img
                          src='/demo/images/blocks/illustration/subscribe.svg'
                          alt='Image'
                          className='mb-6 w-6'
                        />
                        <div className='mx-auto font-medium text-xl mb-4 text-blue-900'>
                          Cloud Backup Williams
                        </div>
                        <p className='m-0 text-blue-700 line-height-3'>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type='button'
                  className='p-carousel-next p-link'
                  aria-label='Next Page'
                >
                  <svg
                    width={14}
                    height={14}
                    viewBox='0 0 14 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='p-icon p-carousel-next-icon'
                    aria-hidden='true'
                  >
                    <path
                      d='M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z'
                      fill='currentColor'
                    />
                  </svg>
                  <span
                    role='presentation'
                    className='p-ink'
                    style={{
                      height: 32,
                      width: 32,
                      top: '-2.17969px',
                      left: '0.5px',
                    }}
                  />
                </button>
              </div>
              <ul className='p-carousel-indicators p-reset'>
                <li className='p-carousel-indicator'>
                  <button type='button' className='p-link' aria-label='Page 1'>
                    <span
                      role='presentation'
                      className='p-ink'
                      style={{ height: 32, width: 32 }}
                    />
                  </button>
                </li>
                <li className='p-carousel-indicator p-highlight'>
                  <button type='button' className='p-link' aria-label='Page 2'>
                    <span
                      role='presentation'
                      className='p-ink'
                      style={{ height: 32, width: 32 }}
                    />
                  </button>
                </li>
                <li className='p-carousel-indicator'>
                  <button type='button' className='p-link' aria-label='Page 3'>
                    <span
                      role='presentation'
                      className='p-ink'
                      style={{ height: 32, width: 32 }}
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className='w-full lg:w-6 p-4 lg:p-7 surface-card'>
          <div className='flex align-items-center justify-content-between mb-7'>
            <span className='text-2xl font-medium text-900'>
              Login to Bastion
            </span>
            <a
              tabIndex={0}
              className='font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150'
            >
              Sign up
            </a>
          </div>
          <div className='flex justify-content-between'>
            <button className='p-ripple mr-2 w-6 font-medium border-1 surface-border surface-100 py-3 px-2 p-component hover:surface-200 active:surface-300 text-900 cursor-pointer transition-colors transition-duration-150 inline-flex align-items-center justify-content-center'>
              <i className='pi pi-facebook text-indigo-500 mr-2' />
              <span>Sign in With Facebook</span>
              <span
                role='presentation'
                className='p-ink'
                style={{ height: '170.75px', width: '170.75px' }}
              />
            </button>
            <button className='p-ripple ml-2 w-6 font-medium border-1 surface-border surface-100 py-3 px-2 p-component hover:surface-200 active:surface-300 text-900 cursor-pointer transition-colors transition-duration-150 inline-flex align-items-center justify-content-center'>
              <i className='pi pi-google text-red-500 mr-2' />
              <span>Sign in With Google</span>
              <span
                role='presentation'
                className='p-ink'
                style={{ height: '170.75px', width: '170.75px' }}
              />
            </button>
          </div>
          <div
            className='p-divider p-component p-divider-horizontal p-divider-solid p-divider-center my-4'
            role='separator'
          >
            <div className='p-divider-content'>
              <span className='text-600 font-normal text-sm'>OR</span>
            </div>
          </div>
          <label htmlFor='email4' className='block text-900 font-medium mb-2'>
            Email
          </label>
          <input
            id='email4'
            type='text'
            placeholder='Email address'
            className='p-inputtext p-component w-full mb-3 p-3'
          />
          <label
            htmlFor='password4'
            className='block text-900 font-medium mb-2'
          >
            Password
          </label>
          <input
            id='password4'
            type='password'
            placeholder='Password'
            className='p-inputtext p-component w-full mb-3 p-3'
          />
          <div className='flex align-items-center justify-content-between mb-6'>
            <div className='flex align-items-center'>
              <div id='rememberme' className='p-checkbox p-component mr-2'>
                <div className='p-hidden-accessible'>
                  <input type='checkbox' />
                </div>
                <div className='p-checkbox-box' />
              </div>
              <label htmlFor='rememberme'>Remember me</label>
            </div>
            <a className='font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150'>
              Forgot password?
            </a>
          </div>
          <button
            aria-label='Sign In'
            className='p-button p-component w-full py-3 font-medium'
          >
            <span className='p-button-label p-c'>Sign In</span>
            <span
              role='presentation'
              className='p-ink'
              style={{ height: '357.5px', width: '357.5px' }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
