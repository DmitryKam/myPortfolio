import React from 'react';
import s from './RemoteWork.module.css'
import sContainer from '../common/styles/Container.module.css';

function RemoteWork() {

    return <div className={s.remoteWork}>
        <div className={`${sContainer.container} ${s.remoteWorkContainer}`}>
                <h2 className={s.title}>I will consider options for remote work</h2>
                <button className={s.hireMe}>Watch </button>
            </div>
    </div>
}

export default RemoteWork;