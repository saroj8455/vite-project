import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ApiCallDemo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Create api call func

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const resp = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      // console.log(resp.data.title);
      setData(resp.data.title);
    } catch (error) {
      setError('An error occurred while fetching the data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='px-4 py-8 md:px-6 lg:px-8 flex justify-content-center align-items-center'>
      <div className='surface-card border-round shadow-2 p-4'>
        <div className='text-900 font-medium mb-2 text-xl'>{data}</div>
        <p className='mt-0 mb-4 p-0 line-height-3'>
          Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in
          hac habitasse platea dictumst.
        </p>
        <button
          aria-label='Save Changes'
          onClick={fetchData}
          disabled={loading}
          className='p-button p-component'
        >
          <span className='p-button-label p-c'>
            {loading ? 'Loading...' : 'Fetch Data'}
          </span>
          <span
            role='presentation'
            className='p-ink'
            style={{ height: '151.32px', width: '151.32px' }}
          />
        </button>

        {error && <p className='mt-0 mb-4 p-0 line-height-3'>Error: {error}</p>}
      </div>
    </div>
  );
}
