import React from 'react';
import s from './Skill.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


type SkillPropsType = {
    title: string
    description:string
    icon:any
}

function Skill(props: SkillPropsType) {

    return (
        <div className={s.skill}>
          <FontAwesomeIcon icon={props.icon} className={s.icon}/>
            <h3 className={s.titleSkill}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    )
}

export default Skill;