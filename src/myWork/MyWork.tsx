import React from 'react';
import s from './MyWork.module.css';
import sContainer from '../common/styles/Container.module.css';
import Work from './work/Work';
import Title from '../common/components/title/Title';





function MyWork() {

    const MyMork1 = {
        color: 'blue',
        //backgroundImage: 'url(' + imgUrl + ')',
    };



    return <div className={s.workBlock}>
        <div className={`${sContainer.container} ${s.workContainer}`}>
            <Title title={"MY WORK!"}/>
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