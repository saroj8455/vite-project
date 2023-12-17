import React from 'react';

export default function Invoice() {
  return (
    <div className='surface-ground px-4 py-8 md:px-6 lg:px-8'>
      <div className='text-900 font-medium text-900 text-xl mb-3'>
        Create Invoice
      </div>
      <div className='surface-card p-4 shadow-2 border-round p-fluid'>
        <div className='grid formgrid p-fluid'>
          <div className='field mb-4 col-12 md:col-6'>
            <label htmlFor='company_name' className='font-medium text-900'>
              Company Name
            </label>
            <input
              id='company_name'
              type='text'
              className='p-inputtext p-component'
            />
          </div>
          <div className='field mb-4 col-12 md:col-6'>
            <label htmlFor='invoice_id' className='font-medium text-900'>
              Invoice Id
            </label>
            <input
              id='invoice_id'
              type='text'
              className='p-inputtext p-component'
            />
          </div>
          <div className='field mb-4 col-12 md:col-6'>
            <label htmlFor='customer_name' className='font-medium text-900'>
              Customer Name
            </label>
            <input
              id='customer_name'
              type='text'
              className='p-inputtext p-component'
            />
          </div>
          <div className='field mb-4 col-12 md:col-6'>
            <label htmlFor='customer_email' className='font-medium text-900'>
              Customer Email
            </label>
            <input
              id='customer_email'
              type='text'
              className='p-inputtext p-component'
            />
          </div>
          <div className='field mb-4 col-12 md:col-6'>
            <label htmlFor='invoice_date' className='font-medium text-900'>
              Invoice Date
            </label>
            <span
              id='invoice_date'
              className='p-calendar p-component p-inputwrapper p-calendar-w-btn p-calendar-w-btn-right'
            >
              <input
                type='text'
                className='p-inputtext p-component'
                autoComplete='off'
                inputMode='none'
              />
              <button
                type='button'
                tabIndex={-1}
                className='p-button p-component p-datepicker-trigger p-button-icon-only'
              >
                <svg
                  width={14}
                  height={14}
                  viewBox='0 0 14 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='p-icon'
                  aria-hidden='true'
                >
                  <path
                    d='M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z'
                    fill='currentColor'
                  />
                </svg>
                <span className='p-button-label p-c'>&nbsp;</span>
                <span
                  role='presentation'
                  className='p-ink'
                  style={{ height: 48, width: 48 }}
                />
              </button>
            </span>
          </div>
          <div className='field mb-4 col-12 md:col-6'>
            <label htmlFor='due_date' className='font-medium text-900'>
              Due Date
            </label>
            <span
              id='due_date'
              className='p-calendar p-component p-inputwrapper p-calendar-w-btn p-calendar-w-btn-right'
            >
              <input
                type='text'
                className='p-inputtext p-component'
                autoComplete='off'
                inputMode='none'
              />
              <button
                type='button'
                tabIndex={-1}
                className='p-button p-component p-datepicker-trigger p-button-icon-only'
              >
                <svg
                  width={14}
                  height={14}
                  viewBox='0 0 14 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='p-icon'
                  aria-hidden='true'
                >
                  <path
                    d='M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z'
                    fill='currentColor'
                  />
                </svg>
                <span className='p-button-label p-c'>&nbsp;</span>
                <span
                  role='presentation'
                  className='p-ink'
                  style={{ height: 48, width: 48 }}
                />
              </button>
            </span>
          </div>
          <div className='surface-border border-top-1 opacity-50 mb-4 col-12' />
          <div className='field mb-4 col-12 md:col-6'>
            <label htmlFor='item' className='font-medium text-900'>
              Item
            </label>
            <input id='item1' type='text' className='p-inputtext p-component' />
          </div>
          <div className='field mb-4 col-6 md:col-3'>
            <label htmlFor='item' className='font-medium text-900'>
              Quantity
            </label>
            <input id='item2' type='text' className='p-inputtext p-component' />
          </div>
          <div className='field mb-4 col-6 md:col-3'>
            <label htmlFor='item' className='font-medium text-900'>
              Price
            </label>
            <div className='flex align-content-center'>
              <span
                id='item3'
                className='p-inputnumber p-component p-inputwrapper flex-1'
              >
                <input
                  role='spinbutton'
                  className='p-inputtext p-component p-inputnumber-input'
                  type='text'
                  inputMode='decimal'
                  defaultValue=''
                />
              </span>
              <button className='p-button p-component p-button-danger p-button-text ml-2 p-button-icon-only'>
                <span className='p-button-icon p-c pi pi-trash' />
                <span className='p-button-label p-c'>&nbsp;</span>
                <span
                  role='presentation'
                  className='p-ink'
                  style={{ height: 48, width: 48, top: 1, left: '-15px' }}
                />
              </button>
            </div>
          </div>
          <div className='field mb-4 col-12 md:col-6'>
            <button
              aria-label='Add Item'
              className='p-button p-component p-button-secondary p-button-outlined w-auto'
            >
              <span className='p-button-icon p-c p-button-icon-left pi pi-plus' />
              <span className='p-button-label p-c'>Add Item</span>
              <span
                role='presentation'
                className='p-ink'
                style={{ height: '135.891px', width: '135.891px' }}
              />
            </button>
          </div>
          <div className='field mb-4 col-12 md:col-6 text-right'>
            <span className='text-xl text-600 font-medium text-900 mr-2'>
              Total
            </span>
            <span className='text-xl text-900 font-medium text-900'>$59</span>
          </div>
          <div className='field mb-4 col-12 flex align-items-center'>
            <div className='p-checkbox p-component'>
              <div className='p-hidden-accessible'>
                <input type='checkbox' />
              </div>
              <div className='p-checkbox-box' />
            </div>
            <span className='ml-2 text-900'>Taxable (VAT 18%)</span>
          </div>
          <div className='surface-border border-top-1 opacity-50 mb-4 col-12' />
          <div className='field mb-4 col-12'>
            <label htmlFor='notes' className='font-medium text-900'>
              Notes
            </label>
            <textarea
              id='notes'
              rows={5}
              className='p-inputtextarea p-inputtext p-component p-inputtextarea-resizable'
              style={{ overflow: 'hidden', height: 119 }}
              spellCheck='false'
              autoComplete='off'
              defaultValue={''}
            />
          </div>
          <div className='surface-border border-top-1 opacity-50 mb-4 col-12' />
        </div>
        <button
          aria-label='Create Invoice'
          className='p-button p-component w-auto'
        >
          <span className='p-button-icon p-c p-button-icon-left pi pi-file' />
          <span className='p-button-label p-c'>Create Invoice</span>
          <span
            role='presentation'
            className='p-ink'
            style={{ height: '176.992px', width: '176.992px' }}
          />
        </button>
      </div>
    </div>
  );
}
