import React from 'react';

const Button = ({ setVolume, handleToggle, text, type, on }) => {

    const handleVolume = () => {
        if (text === '+VOL') {
            setVolume(prevState => prevState + 1);
        }
        if (text === '-VOL') {
            setVolume(prevState => prevState - 1);
        }
    }

    const handleClickSwitch = () => {
        handleToggle();
    }

    if (type === 'toggle') {
        return (
            <div className={`btn-panel__box ${on ? 'btn-panel__box--on' : ''}`}>
                <button onClick={handleClickSwitch} className='btn-panel__btn'></button>
                {on ? 'ON' : 'OFF'}
            </div>
        )
    }
    if (type === 'volume') {
        return (
            <div className={`btn-panel__box ${type === 'toggle' ? 'btn-panel__box--on' : ''}`}>
                <button onClick={handleVolume} className='btn-panel__btn'></button>
                {text}
            </div>
        )
    }
}



export default Button;