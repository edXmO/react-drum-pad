import React from 'react';
import '../../css/App.css';
import PadButton from './PadButton/PadButton';
import padSamples from '../../helpers/padSamples';


const Pad = ({ setActiveSample }) => {

    const renderPadButtons = padSamples.map(padKey => {
        const { key, id } = padKey;
        return <PadButton btn={key} key={id} id={id} setActiveSample={setActiveSample} />
    })

    return (
        <div className='pad'>
            {renderPadButtons}
        </div>
    )
}

export default Pad;