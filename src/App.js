import React from 'react';

import './css/App.css';
import Pad from './components/Pad/Pad';
import Control from './components/Control/Control';

function App() {
  return (
    <div className="container">
      <Pad />
      <Control />
    </div>
  );
}

export default App;
