import React from 'react';
import s from './Mains.module.scss';
import sContainer from '../common/styles/Container.module.scss';
import meImmage from '../assets/immage/meImmage.jpg';
function Mains() {

    const me = {
        color: 'blue',
        backgroundImage:`url(${meImmage})`
    }

    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
            <div className={s.greeting}>
                <span className={s.span}>Hi There, I`m</span>
                <h1 className={s.h1}>Dmitry Kamlykou</h1>
                <p className={s.p}>Frontend Developer</p>
            </div>
            <div className={s.photo} style={me}> </div>
            </div>
        </div>
    )
}

export default Mains;