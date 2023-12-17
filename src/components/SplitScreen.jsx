import React from 'react';

export default function SplitScreen() {
  return (
    <div className='flex'>
      <div className='surface-section w-full md:w-6 p-6 md:p-8'>
        <div className='mb-5'>
          <img
            src='https://blocks.primereact.org/demo/images/blocks/logos/hyper.svg'
            alt='hyper'
            height={50}
            className='mb-3'
          />
          <div className='text-900 text-3xl font-medium mb-3'>Welcome Back</div>
          <span className='text-600 font-medium mr-2'>
            Do not have an account?
          </span>
          <a className='font-medium no-underline text-blue-500 cursor-pointer'>
            Create today!
          </a>
        </div>
        <div>
          <label htmlFor='email2' className='block text-900 font-medium mb-2'>
            Email
          </label>
          <input
            id='email2'
            type='text'
            placeholder='Email address'
            className='p-inputtext p-component w-full mb-3'
          />
          <label
            htmlFor='password2'
            className='block text-900 font-medium mb-2'
          >
            Password
          </label>
          <input
            id='password2'
            type='password'
            placeholder='Password'
            className='p-inputtext p-component w-full mb-3'
          />
          <div className='flex align-items-center justify-content-between mb-6'>
            <div className='flex align-items-center'>
              <div id='rememberme2' className='p-checkbox p-component mr-2'>
                <div className='p-hidden-accessible'>
                  <input type='checkbox' />
                </div>
                <div className='p-checkbox-box' />
              </div>
              <label htmlFor='rememberme2'>Remember me</label>
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
              style={{ height: '405.5px', width: '405.5px' }}
            />
          </button>
        </div>
      </div>
      <div
        className='hidden md:block w-6 bg-no-repeat bg-cover'
        style={{
          backgroundImage:
            'url("https://blocks.primereact.org/demo/images/blocks/signin/signin.jpg")',
        }}
      />
    </div>
  );
}
