import React from 'react';
import s from './Skills.module.scss';
import sContainer from '../common/styles/Container.module.scss';
import Skill from './skill/Skill';
import Title from '../common/components/title/Title';
import {faGit, faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons';

function Skills() {
    const react = faReact;
    const html5 = faHtml5;
    const js = faJs;
    const git = faGit


    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill
                        icon={js}
                        title={'JS'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, necessitatibus. Ab eos numquam perspiciatis suscipit! At dicta, esse odit pariatur saepe tempore.'}/>
                    <Skill
                        icon={react}
                        title={'React'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, necessitatibus. Ab eos numquam perspiciatis suscipit! At dicta, esse odit pariatur saepe tempore.'}/>
                    <Skill
                        icon={html5}
                        title={'HTML&&CSS'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, necessitatibus. Ab eos numquam perspiciatis suscipit! At dicta, esse odit pariatur saepe tempore.'}/>

                </div>
            </div>
        </div>
    )
}

export default Skills;