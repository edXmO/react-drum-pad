import React from 'react';
import '../../css/App.css';
import Display from './Display/Display';
import Panel from './Panel/Panel';
import Copy from './Copy/Copy';

const Control = () => {
    return (
        <div className='control'>
            <Display type={'VOL: 80%'} screenType={'display display__volume'} />
            <Panel />
            <Display type={'Hi hat'} screenType={'display display__sound'} />
            <Copy />
        </div>
    )
}

export default Control;