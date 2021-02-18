import React from 'react';
import '../../css/App.css';
import Display from './Display/Display';
import Panel from './Panel/Panel';
import Copy from './Copy/Copy';

const Control = () => {
    return (
        <div className='control'>
            <Display type={'Volume screen'} screenType={'display display__volume'} />
            <Panel />
            <Display type={'Sound type screen on'} screenType={'display display__sound'} />
            <Copy />
        </div>
    )
}

export default Control;