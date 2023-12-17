// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Notes from './components/Notes';
function App() {
  return (
    <>
      <Navbar />
      <Notes />
      <Landing />
      <Contact />
    </>
  );
}

export default App;
