import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { ProgressSpinner } from 'primereact/progressspinner';

const DUMMY_API = 'https://dummyjson.com/posts/';
export default function DemoOne() {
  // Initial value for postId
  const [postId, setPostId] = useState(1);

  const handelChange = () => {
    // Pass a random postId
    setPostId(Math.floor(Math.random() * 100));
  };

  return (
    <div className='px-4 py-8 md:px-6 lg:px-8 flex gap-2 justify-content-center align-items-center'>
      <div className='surface-card w-6 sm:w-max border-round shadow-2 p-4'>
        <PostBody Id={postId} />
        <div className='card flex justify-content-center'>
          <Button onClick={handelChange} label='Show me a different post' />
        </div>
      </div>
    </div>
  );
}

export function PostBody({ Id }) {
  // set initial value as null
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Prevent twice api call
    const source = axios.CancelToken.source();
    const getPost = async () => {
      try {
        const resp = await axios.get(`${DUMMY_API}${Id}`, {
          cancelToken: source.token,
        });
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
  }, [Id]);
  return (
    <>
      {loading ? (
        <div className='card flex justify-content-center py-3'>
          <ProgressSpinner strokeWidth='2' animationDuration='10s' />
        </div>
      ) : (
        <>
          <p className='text-center text-6xl font-bold'>{post.title}</p>
          <p className='text-center font-bold'>{post.body}</p>
        </>
      )}
    </>
  );
}
