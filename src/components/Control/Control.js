import React, { useState } from 'react';
import '../../css/App.css';
import Display from './Display/Display';
import Panel from './Panel/Panel';
import Copy from './Copy/Copy';

const Control = () => {

    const [toggle, setToggle] = useState(false);
    const [volume, setVolume] = useState(80);

    const handleToggle = () => {
        setToggle(prevState => !prevState);
    }


    return (
        <div className='control'>
            <Display type={`VOL: ${volume}%`} screenType={`display display__volume ${toggle ? 'display display__volume--on' : ''}`} />
            <Panel toggle={toggle} setVolume={setVolume} handleToggle={handleToggle} />
            <Display type={'Hi hat'} screenType={`display display__sound ${toggle ? 'display display__sound--on' : ''}`} />
            <Copy />
        </div>
    )
}

export default Control;