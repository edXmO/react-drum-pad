import React from 'react';
import '../../css/App.css';
import PadButton from './PadButton/PadButton';


const Pad = () => {
    return (
        <div className='pad'>
            <PadButton btn={'Q'} />
            <PadButton btn={'W'} />
            <PadButton btn={'E'} />
            <PadButton btn={'A'} />
            <PadButton btn={'S'} />
            <PadButton btn={'D'} />
            <PadButton btn={'Z'} />
            <PadButton btn={'X'} />
            <PadButton btn={'C'} />
        </div>
    )
}

export default Pad;