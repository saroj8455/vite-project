import React from 'react';

export default function FeaturesItem() {
  return (
    <div
      className='px-4 py-8 md:px-6 lg:px-8'
      style={{
        background:
          'url("https://blocks.primereact.org/demo/images/blocks/signin/signin-2.jpg") 0% 0% / cover no-repeat',
      }}
    >
      <div className='flex flex-wrap'>
        <div
          className='w-full lg:w-6 p-4 lg:p-7'
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
        >
          <img
            src='https://blocks.primereact.org/demo/images/blocks/logos/bastion-purple.svg'
            alt='Image'
            height={50}
            className='mb-6'
          />
          <div className='text-xl text-black-alpha-90 font-500 mb-3'>
            Welcome to Bastion
          </div>
          <p className='text-black-alpha-50 line-height-3 mt-0 mb-6'>
            Quis vel eros donec ac odio tempor orci dapibus. In hac habitasse
            platea dictumst quisque.
          </p>
          <ul className='list-none p-0 m-0'>
            <li className='flex align-items-start mb-4'>
              <div>
                <span
                  className='flex align-items-center justify-content-center bg-purple-400'
                  style={{ width: 38, height: 38, borderRadius: 10 }}
                >
                  <i className='text-xl text-white pi pi-inbox' />
                </span>
              </div>
              <div className='ml-3'>
                <span className='font-medium text-black-alpha-90'>
                  Unlimited Inbox
                </span>
                <p className='mt-2 mb-0 text-black-alpha-50 line-height-3'>
                  Tincidunt nunc pulvinar sapien et. Vitae purus faucibus ornare
                  suspendisse sed nisi lacus sed viverra.{' '}
                </p>
              </div>
            </li>
            <li className='flex align-items-start mb-4'>
              <div>
                <span
                  className='flex align-items-center justify-content-center bg-purple-400'
                  style={{ width: 38, height: 38, borderRadius: 10 }}
                >
                  <i className='text-xl text-white pi pi-shield' />
                </span>
              </div>
              <div className='ml-3'>
                <span className='font-medium text-black-alpha-90'>
                  Premium Security
                </span>
                <p className='mt-2 mb-0 text-black-alpha-50 line-height-3'>
                  Scelerisque purus semper eget duis at tellus at urna. Sed
                  risus pretium quam vulputate.
                </p>
              </div>
            </li>
            <li className='flex align-items-start'>
              <div>
                <span
                  className='flex align-items-center justify-content-center bg-purple-400'
                  style={{ width: 38, height: 38, borderRadius: 10 }}
                >
                  <i className='text-xl text-white pi pi-globe' />
                </span>
              </div>
              <div className='ml-3'>
                <span className='font-medium text-black-alpha-90'>
                  Cloud Backups Inbox
                </span>
                <p className='mt-2 mb-0 text-black-alpha-50 line-height-3'>
                  Egestas sed tempus urna et. Auctor elit sed vulputate mi sit
                  amet mauris commodo.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className='w-full lg:w-6 p-4 lg:p-7 surface-card'>
          <div className='text-900 text-2xl font-medium mb-6'>Login</div>
          <label htmlFor='email3' className='block text-900 font-medium mb-2'>
            Email
          </label>
          <input
            id='email3'
            type='text'
            placeholder='Email address'
            className='p-inputtext p-component w-full mb-4'
          />
          <label
            htmlFor='password3'
            className='block text-900 font-medium mb-2'
          >
            Password
          </label>
          <input
            id='password3'
            type='password'
            placeholder='Password'
            className='p-inputtext p-component w-full mb-4'
          />
          <div className='flex align-items-center justify-content-between mb-6'>
            <div className='flex align-items-center'>
              <div id='rememberme3' className='p-checkbox p-component mr-2'>
                <div className='p-hidden-accessible'>
                  <input type='checkbox' />
                </div>
                <div className='p-checkbox-box' />
              </div>
              <label htmlFor='rememberme3'>Remember me</label>
            </div>
            <a className='font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer'>
              Forgot password?
            </a>
          </div>
          <button aria-label='Login' className='p-button p-component w-full'>
            <span className='p-button-icon p-c p-button-icon-left pi pi-user' />
            <span className='p-button-label p-c'>Login</span>
            <span
              role='presentation'
              className='p-ink'
              style={{ height: '357.5px', width: '357.5px' }}
            />
          </button>
          <div
            className='p-divider p-component p-divider-horizontal p-divider-solid p-divider-center my-6'
            role='separator'
          >
            <div className='p-divider-content'>
              <span className='text-600 font-normal text-sm'>OR</span>
            </div>
          </div>
          <button
            aria-label='Sign In with GitHub'
            className='p-button p-component w-full p-button-secondary'
          >
            <span className='p-button-icon p-c p-button-icon-left pi pi-github' />
            <span className='p-button-label p-c'>Sign In with GitHub</span>
            <span
              role='presentation'
              className='p-ink'
              style={{ height: '357.5px', width: '357.5px' }}
            />
          </button>
          <div className='mt-6 text-center text-600'>
            Do not have an account?{' '}
            <a tabIndex={0} className='font-medium text-blue-500'>
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
