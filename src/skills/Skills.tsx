import React from 'react';
import s from './Skills.module.css';
import sContainer from '../common/styles/Container.module.css';
import Skill from './skill/Skill';

function Skills() {

    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, necessitatibus.'}/>
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, necessitatibus.'}/>
                    <Skill title={'HTML&&CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, necessitatibus.'}/>


                </div>
            </div>
        </div>
    )
}

export default Skills;