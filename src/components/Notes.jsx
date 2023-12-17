import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Button } from 'primereact/button';

// function callAPI(url) {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       // API call
//       const response = await fetch(url);
//       const data = await response.json();
//       setData(data);
//     };

//     fetchData();
//   }, [url]);

//   return data;
// }

export default function Notes() {
  // const data = callAPI('https://jsonplaceholder.typicode.com/users');
  const [notes, setNotes] = useState([]);
  const baseUrl = 'http://localhost:8004/api/notes';
  // const getNotes = async () => {
  //   try {
  //     const resp = await axios.get(baseUrl);
  //     // console.log(resp.data.notes);
  //     setNotes(resp.data.notes);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getNotes = async () => {
      try {
        const resp = await axios.get(baseUrl, {
          cancelToken: source.token,
        });
        // console.log(resp.data.notes);
        setNotes(resp.data.notes);
      } catch (error) {
        console.log(error);
      }
    };
    getNotes();
    return () => {
      source.cancel();
      console.log('Clean up method called');
    };
  }, []);

  return (
    <>
      <div className='text-900 font-medium mb-2 text-center  text-xl'>
        Notes Count {notes.length}
      </div>
      <div className='px-4 py-8 md:px-6 lg:px-8 flex gap-2 flex-wrap  justify-content-center align-items-center'>
        {notes.map((n, index) => {
          return (
            <div key={index} className='surface-card border-round shadow-2 p-4'>
              <div className='text-900 font-medium mb-2 text-xl'>{n.title}</div>
              <p className='mt-0 mb-4 p-0 line-height-3'>{n.text}</p>
              <span className='p-buttonset'>
                <Button label='Save' severity='success' icon='pi pi-check' />
                <Button label='Delete' severity='danger' icon='pi pi-trash' />
                <Button label='Cancel' icon='pi pi-times' />
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
