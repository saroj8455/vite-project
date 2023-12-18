import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { ProgressSpinner } from 'primereact/progressspinner';

const PRICE_PER_ITEM = 5;

export default function DemoOne() {
  const dummyApi = 'https://dummyjson.com/posts/';
  // set initial value as null
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent twice api call
    const source = axios.CancelToken.source();
    const getPost = async () => {
      try {
        const resp = await axios.get(
          `${dummyApi}${Math.floor(Math.random() * 100)}`,
          {
            cancelToken: source.token,
          }
        );
        // console.log(resp.data);
        setPost(resp.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
    return () => {
      source.cancel();
      console.log('Clean up api call');
    };
  }, []);

  const handelChange = () => {};

  return (
    <div className='px-4 py-8 md:px-6 lg:px-8 flex gap-2 justify-content-center align-items-center'>
      <div className='surface-card w-6 border-round shadow-2 p-4'>
        {loading ? (
          <div className='card flex justify-content-center'>
            <ProgressSpinner />
          </div>
        ) : (
          <>
            <p className='text-center font-bold'>{post.title}</p>
            <p className='text-center font-bold'>{post.body}</p>
          </>
        )}

        <div className='card flex justify-content-center'>
          <Button onClick={handelChange} label={`Find Post`} />
        </div>
      </div>
    </div>
  );
}
