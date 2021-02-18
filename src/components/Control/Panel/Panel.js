import React from 'react';
import '../../../css/App.css';
import Button from './Button/Button';

const Panel = () => {
    return (
        <div className='btn-panel'>
            <Button text={'ON / OFF'} type={'ON'} />
            <Button text={'+VOL'} type={'volume'} />
            <Button text={'-VOL'} tpye={'volume'} />
        </div>
    )
}

export default Panel;