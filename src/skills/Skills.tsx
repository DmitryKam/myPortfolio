import React from 'react';
import s from './Skills.module.scss';
import sContainer from '../common/styles/Container.module.css';
import Skill from './skill/Skill';
import Title from '../common/components/title/Title';

function Skills() {

    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}/>
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