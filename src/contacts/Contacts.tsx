import React from 'react';
import s from './Contacts.module.scss'
import sContainer from '../common/styles/Container.module.css';
import Title from '../common/components/title/Title';

function Contacts() {


    return <div className={s.contactsBlock}>
        <div className={`${sContainer.container} ${s.contactsContainer}`}>
            <Title title={'Contacts'}/>
            <form className={s.formContainer}>
                <input type={'text'}/>
                <input type={'text'}/>
                <textarea />
            </form>
            <button type={'submit'} className={s.buttonContainer}>Send</button>
        </div>
    </div>
}

export default Contacts;