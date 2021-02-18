import React from 'react';

const Button = ({ text, type }) => {
    return (
        <div className='btn-panel__box'>
            <button className='btn-panel__btn'></button>
            {text}
        </div>
    )
}

export default Button;