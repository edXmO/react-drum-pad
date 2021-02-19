import React from 'react';
import '../../../css/App.css';

const PadButton = ({ id, setActiveSample }) => {

    const handleActiveSample = id => {
        console.log('active sample', id);
        setActiveSample(id);
    }

    return (
        <button onClick={() => handleActiveSample(id)}
            className='pad-btn'></button>
    )
}

export default PadButton;