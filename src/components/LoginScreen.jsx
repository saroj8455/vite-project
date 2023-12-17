import React from 'react';

export default function LoginScreen() {
  return (
    <div className='surface-ground px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center'>
      <div className='surface-card p-4 shadow-2 border-round w-full lg:w-6'>
        <div className='text-center mb-5'>
          <img
            src='https://blocks.primereact.org/demo/images/blocks/logos/hyper.svg'
            alt='hyper'
            height={50}
            className='mb-3'
          />
          <div className='text-900 text-3xl font-medium mb-3'>Welcome Back</div>
          <span className='text-600 font-medium line-height-3'>
            Do not have an account?
          </span>
          <a className='font-medium no-underline ml-2 text-blue-500 cursor-pointer'>
            Create today!
          </a>
        </div>
        <div>
          <label htmlFor='email' className='block text-900 font-medium mb-2'>
            Email
          </label>
          <input
            id='email'
            type='text'
            placeholder='Email address'
            className='p-inputtext p-component w-full mb-3'
          />
          <label htmlFor='password' className='block text-900 font-medium mb-2'>
            Password
          </label>
          <input
            type='password'
            placeholder='Password'
            className='p-inputtext p-component w-full mb-3'
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
            <a className='font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer'>
              Forgot your password?
            </a>
          </div>
          <button aria-label='Sign In' className='p-button p-component w-full'>
            <span className='p-button-icon p-c p-button-icon-left pi pi-user' />
            <span className='p-button-label p-c'>Sign In</span>
            <span
              role='presentation'
              className='p-ink'
              style={{ height: '437.5px', width: '437.5px' }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
