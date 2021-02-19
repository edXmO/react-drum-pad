import React from 'react';
import UIfx from 'uifx';
import '../../../css/App.css';
// Sound dx imports
import Clap01 from '../../../assets/sounds/Clap01.wav';
import ClHat01 from '../../../assets/sounds/ClHat01.wav';
import Cymbal from '../../../assets/sounds/Cymbal.wav';
import Kick01 from '../../../assets/sounds/Kick01.wav';
import Kick02 from '../../../assets/sounds/Kick02.wav';
import OpHat02 from '../../../assets/sounds/OpHat02.wav';
import Snr01 from '../../../assets/sounds/Snr01.wav';
import Tom01 from '../../../assets/sounds/Tom01.wav';
import Tom02 from '../../../assets/sounds/Tom02.wav';

const PadButton = ({ volume, toggle, id, setActiveSample }) => {

    const vol = { volume: volume / 100 };

    const handleClick = id => {
        if (!toggle) return;
        let soundfx;
        switch (id) {
            case 'Open Hi-hat':
                soundfx = new UIfx(OpHat02, vol);
                soundfx.play();
                break;
            case 'Snare':
                soundfx = new UIfx(Snr01, vol);
                soundfx.play();
                break;
            case 'Kick':
                soundfx = new UIfx(Kick01, vol);
                soundfx.play();
                break;
            case 'Hard Tom':
                soundfx = new UIfx(Tom01, vol);
                soundfx.play();
                break;
            case 'Crash Cymbal':
                soundfx = new UIfx(Cymbal, vol);
                soundfx.play();
                break;
            case 'Clap':
                soundfx = new UIfx(Clap01, vol);
                soundfx.play();
                break;
            case 'Electro Kick':
                soundfx = new UIfx(Kick02, vol);
                soundfx.play();
                break;
            case 'Close Hi-hat':
                soundfx = new UIfx(ClHat01, vol);
                soundfx.play();
                break;
            case 'Tom':
                soundfx = new UIfx(Tom02, vol);
                soundfx.play();
                break;
        }
        setActiveSample(id);
    }

    return (
        <button onClick={() => handleClick(id)}
            className='pad-btn'></button>
    )
}

export default PadButton;