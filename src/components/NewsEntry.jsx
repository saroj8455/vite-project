import React from 'react';

export default function NewsEntry() {
  return (
    <div className='px-4 py-8 md:px-6 lg:px-8'>
      <div className='surface-card shadow-2 border-round p-4'>
        <div className='text-xl text-900 font-medium mb-5'>Latest News</div>
        <ul className='list-none p-0 m-0'>
          <li className='pb-3 border-bottom-1 surface-border'>
            <div className='font-medium text-900 mb-2'>
              Aenean euismod elementum
            </div>
            <div
              className='line-height-3 text-600'
              style={{ maxWidth: '30rem' }}
            >
              Vitae turpis massa sed elementum tempus egestas sed sed risus. In
              metus vulputate eu scelerisque felis imperdiet proin.
            </div>
          </li>
          <li className='py-3 border-bottom-1 surface-border'>
            <div className='font-medium text-900 mb-2'>
              In iaculis nunc sed augue lacus
            </div>
            <div
              className='line-height-3 text-600'
              style={{ maxWidth: '30rem' }}
            >
              Viverra vitae congue. Nisi scelerisque eu ultrices vitae auctor eu
              augue ut lectus. Elementum eu facilisis sed odio morbi.
            </div>
          </li>
          <li className='py-3 border-bottom-1 surface-border'>
            <div className='font-medium text-900 mb-2'>
              Proin sagittis nisl rhoncus
            </div>
            <div
              className='line-height-3 text-600'
              style={{ maxWidth: '30rem' }}
            >
              In pellentesque massa placerat duis ultricies lacus. Ac feugiat
              sed lectus vestibulum mattis ullamcorper.
            </div>
          </li>
        </ul>
        <div className='flex justify-content-between pt-3'>
          <button
            aria-label='Clear All'
            className='p-button p-component p-button-outlined p-button-secondary w-6 mr-2'
          >
            <span className='p-button-label p-c'>Clear All</span>
            <span
              role='presentation'
              className='p-ink'
              style={{
                height: '453.5px',
                width: '453.5px',
                top: '-201.5px',
                left: 82,
              }}
            />
          </button>
          <button
            aria-label='New Entry'
            className='p-button p-component p-button-outlined w-6 ml-2'
          >
            <span className='p-button-label p-c'>New Entry</span>
            <span
              role='presentation'
              className='p-ink'
              style={{
                height: '453.5px',
                width: '453.5px',
                top: '-205.5px',
                left: '-203.5px',
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
