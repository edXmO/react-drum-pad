import React from 'react';
import '../../css/App.css';
import Display from './Display/Display';
import Panel from './Panel/Panel';
import Copy from './Copy/Copy';

const Control = ({ activeSample, toggle, volume, setVolume, handleToggle }) => {

    return (
        <div className='control'>
            <Display content={`VOL: ${volume}%`} screenType={`display display__volume ${toggle ? 'display display__volume--on' : ''}`} />
            <Panel toggle={toggle} setVolume={setVolume} handleToggle={handleToggle} />
            <Display content={activeSample} screenType={`display display__sound ${toggle ? 'display display__sound--on' : ''}`} />
            <Copy />
        </div>
    )
}

export default Control;