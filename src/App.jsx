// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Notes from './components/Notes';
import ActionItem from './components/ActionItem';
import { testApiCall } from './common/CreateApiCall';
import axios from 'axios';
import ApiCallDemo from './components/ApiCallDemo';

function App() {
  const [title, setTitle] = useState('');
  const apiurl = 'https://jsonplaceholder.typicode.com/todos/1';

  // Approcah to prevent api call twice working and test
  useEffect(() => {
    const todo = async () => {
      const resp = await axios.get(apiurl);
      console.log(resp.data);
      setTitle(`API Call Successful: ${resp.data.title}`);
    };
    return todo;
  }, []);

  return (
    <>
      <Navbar />
      <ApiCallDemo />
      <ActionItem title={title} />
      <Notes />
      <Landing />
      <Contact />
    </>
  );
}

export default App;
