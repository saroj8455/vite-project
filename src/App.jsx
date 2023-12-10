// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Contact />
    </>
  );
}

export default App;
