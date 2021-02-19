import React, { useState } from 'react';

import './css/App.css';
import Logo from './components/Logo/Logo';
import Pad from './components/Pad/Pad';
import Control from './components/Control/Control';

const App = () => {

  const [toggle, setToggle] = useState(false);
  const [volume, setVolume] = useState(80);
  const [activeSample, setActiveSample] = useState('');

  const handleToggle = () => {
    if (!toggle) {
      setActiveSample('');
      setVolume(80);
    }
    setToggle(prevState => !prevState);
  }

  return (
    <div className="container">
      <Logo />
      <Pad setActiveSample={setActiveSample} toggle={toggle} volume={volume} />
      <Control activeSample={activeSample} toggle={toggle} volume={volume} setVolume={setVolume} handleToggle={handleToggle} />
    </div>
  );
}

export default App;
