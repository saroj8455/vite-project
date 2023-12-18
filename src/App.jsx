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
import DatePickerComp from './components/DatePickerComp';
import NewsEntry from './components/NewsEntry';
import LoginScreen from './components/LoginScreen';
import FeaturesItem from './components/FeaturesItem';
import LoginCarousel from './components/LoginCarousel';
import SplitScreen from './components/SplitScreen';
import PaymentGroup from './components/PaymentGroup';
import Invoice from './components/Invoice';
import DemoOne from './components/DemoOne';

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
      <DemoOne />
      <Invoice />
      <PaymentGroup />
      <SplitScreen />
      <LoginCarousel />
      <FeaturesItem />
      <LoginScreen />
      <NewsEntry />
      <DatePickerComp />
      <ApiCallDemo />
      <ActionItem title={title} />
      <Notes />
      <Landing />
      <Contact />
    </>
  );
}

export default App;
