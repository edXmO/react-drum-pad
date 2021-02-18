import React from 'react';
import '../../../css/App.css';

const Display = ({ type, screenType }) => {
    return (
        <div className={screenType}>
            {type}
        </div>)
}

export default Display;