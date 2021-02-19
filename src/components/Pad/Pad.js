import React from 'react';
import '../../css/App.css';
import PadButton from './PadButton/PadButton';
import padSamples from '../../helpers/padSamples';
// import sound from '../../assets/sounds/'


const Pad = ({ volume, toggle, setActiveSample }) => {

    const renderPadButtons = padSamples.map(padKey => {
        const { key, id } = padKey;
        return <PadButton volume={volume} btn={key} key={id} id={id} setActiveSample={setActiveSample} toggle={toggle} />
    })

    return (
        <div className='pad'>
            {renderPadButtons}
        </div>
    )
}

export default Pad;