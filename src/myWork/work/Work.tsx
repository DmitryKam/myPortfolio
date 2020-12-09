import React from 'react';
import s from './Work.module.scss';

type WorkPropsType = {
    name: string
    description: string
    style: any
}


function Work(props: WorkPropsType) {

    return<div className={s.work}>
        <div className={s.workImage} style={props.style}>
            <button className={s.buttonWork}>Watch</button>
        </div>
        <div className={s.workInfo}>
            <h3 className={s.nameProject}> {props.name}</h3>
            <span className={s.descriptionProject}>{props.description}</span>
        </div>
    </div>
}

export default Work;