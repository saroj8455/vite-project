import React, { useMemo, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default function QueryItem() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const itemRef = useRef();

  // filter item and bind to useMemo for optmization
  const matchItems = useMemo(() => {
    return items.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  }, [query, items]);

  // handel submit
  const submitHandeler = (e) => {
    e.preventDefault();
    const item = itemRef.current.value;
    if (!item) return;
    setItems((prev) => [...prev, item]);
    itemRef.current.value = '';
  };
  return (
    <div className='px-4 py-8 md:px-6 lg:px-8 flex gap-2 justify-content-center align-items-center'>
      <div className='surface-card  sm:w-max border-round shadow-2 p-4'>
        <h1>Search Query Example with Correct way</h1>
        <div className='card py-2'>
          <InputText
            className='w-full'
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder='Search Item'
          />
        </div>
        <div className='card'>
          <form onSubmit={submitHandeler}>
            <div className='card flex gap-2 py-2 align-items-center justify-content-center '>
              <InputText ref={itemRef} />
              <Button type='submit' label='Add Item' />
            </div>
          </form>
        </div>

        <p className='text-center font-bold'>
          {matchItems.map((it) => {
            return (
              <span key={it}>
                {it} <br />
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
