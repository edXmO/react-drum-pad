import React from 'react';
import '../../../css/App.css';
import Button from './Button/Button';

const Panel = ({ setVolume, toggle, handleToggle }) => {

    return (
        <div className='btn-panel'>
            <Button type={'toggle'} on={toggle} handleToggle={handleToggle} />
            <Button text={'+VOL'} type={'volume'} setVolume={setVolume} />
            <Button text={'-VOL'} type={'volume'} setVolume={setVolume} />
        </div>
    )
}

export default Panel;