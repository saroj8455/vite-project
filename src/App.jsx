// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Notes from './components/Notes';
import ActionItem from './components/ActionItem';

function App() {
  return (
    <>
      <Navbar />
      <ActionItem />
      <Notes />
      <Landing />
      <Contact />
    </>
  );
}

export default App;
