import React from 'react';

import './css/App.css';
import Logo from './components/Logo/Logo';
import Pad from './components/Pad/Pad';
import Control from './components/Control/Control';

function App() {
  return (
    <div className="container">
      <Logo />
      <Pad />
      <Control />
    </div>
  );
}

export default App;
