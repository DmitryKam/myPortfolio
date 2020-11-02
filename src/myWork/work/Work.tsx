import React from 'react';
import s from './Work.module.css';

type WorkPropsType = {
    name: string
    description: string
}


function Work(props: WorkPropsType) {

    return <div className={s.work}>
            <div className={s.workPhoto}>
                    <button className={s.watchWork}>Watch </button>
            </div>
        <span className={s.nameProject}> {props.name}</span>
        <span className={s.descriptionProject}>{props.description}</span>
    </div>
}

export default Work;