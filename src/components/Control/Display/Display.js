import React from 'react';
import '../../../css/App.css';

const Display = ({ content, screenType }) => {
    return (
        <div className={screenType}>
            {content}
        </div>
    )
}

export default Display;