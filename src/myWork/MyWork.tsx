import React from 'react';
import s from './MyWork.module.css';
import sContainer from '../common/styles/Container.module.css';
import Work from './work/Work';



function MyWork() {


    return <div className={s.workBlock}>
        <div className={`${sContainer.container} ${s.workContainer}`}>
            <h2 className={s.title}>My Work!</h2>
            <div className={s.works}>
        <Work
            name = {'Name project 1'}
            description={'Short description 1'}
        />
        <Work
            name = {'Name project 2'}
            description={'Short description 2'}
        />
            </div>
    </div>
    </div>
}

export default MyWork;