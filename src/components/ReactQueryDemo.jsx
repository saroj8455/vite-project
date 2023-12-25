import React from 'react';
// import { useQuery } from '@tanstack/react-query';
import { useQuery } from 'react-query';
import axios from 'axios';
import { ProgressSpinner } from 'primereact/progressspinner';

const retrievePosts = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
};

export default function ReactQueryDemo() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery('postsData', retrievePosts);
  if (isLoading)
    return (
      <div>
        <ProgressSpinner />
      </div>
    );
  if (error) return <div>An error occurred: {error.message}</div>;
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <i className='pi pi-check'></i> {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default function ReactQueryDemo() {
//   const { isPending, error, data } = useQuery({
//     queryKey: ['repoData'],
//     queryFn: () =>
//       fetch('https://api.github.com/repos/TanStack/query').then((res) =>
//         res.json()
//       ),
//   });
//   if (isPending) return 'Loading...';

//   if (error)
//     console.log('An error occurred while fetching the user data ', error);
//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <p>{data.description}</p>
//       <strong>👀 {data.subscribers_count}</strong>{' '}
//       <strong>✨ {data.stargazers_count}</strong>{' '}
//       <strong>🍴 {data.forks_count}</strong>
//     </div>
//   );
// }
