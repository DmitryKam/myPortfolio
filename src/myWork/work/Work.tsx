import React from 'react';
import s from './Work.module.css';

type WorkPropsType = {
    name: string
    description: string
}


function Work(props: WorkPropsType) {

    return <div className={s.work}>
        <div className={s.workPhoto}>
            <button className={s.watchWork}>Watch</button>
        </div>
        <div className={s.workInfo}>
            <h3 className={s.nameProject}> {props.name}</h3>
            <span className={s.descriptionProject}>{props.description}</span>
        </div>
    </div>
}

export default Work;