import React from 'react';
import s from './Mains.module.css';
import sContainer from '../common/styles/Container.module.css';

function Mains() {

    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
            <div className={s.greeting}>
                <span>Hi There</span>
                <h1>Dmitry Kamlykou</h1>
                <p>Frontend Developer</p>
            </div>
            <div className={s.photo}>Photo</div>
            </div>
        </div>
    )
}

export default Mains;