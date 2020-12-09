import React from 'react';
import s from './MyWork.module.scss';
import sContainer from '../common/styles/Container.module.css';
import Work from './work/Work';
import Title from '../common/components/title/Title';
import todoImmage from '../assets/immage/todolist.jpg'
import socialNetwork from '../assets/immage/socialNetwork.png'





function MyWork() {

    const social = {
        color: 'blue',
        backgroundImage: `url(${socialNetwork})`
    };

    const todoList = {
        color: 'blue',
        backgroundImage:`url(${todoImmage})`
    };


    return <div className={s.workBlock}>
        <div className={`${sContainer.container} ${s.workContainer}`}>
            <Title title={"MY WORK!"}/>
            <div className={s.works}>
        <Work
            style = {social}
            name = {'Social network'}
            description={'Short description 1'}
        />
        <Work
            style = {todoList}
            name = {'todoList'}
            description={'Short description 2'}
        />
            </div>
    </div>
    </div>

}

export default MyWork;