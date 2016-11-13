import React from 'react';
import DevTools from './DevTools';
import HomePage from '../components/HomePage';
import Navbar from '../components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <DevTools/>
    </div>
  );
};
export default App;
