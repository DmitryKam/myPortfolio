import React from 'react';
import s from './Contacts.module.scss'
import sContainer from '../common/styles/Container.module.scss';
import Title from '../common/components/title/Title';

function Contacts() {


    return <div className={s.contactsBlock}>
        <div className={`${sContainer.container} ${s.contactsContainer}`}>
            <Title title={'Contacts'}/>
            <form className={s.formContainer}>
                <input className={s.input} type={'text'} placeholder={'Name'}/>
                <input className={s.input} type={'text'} placeholder={'E-mail'}/>
                <textarea className={s.textarea} placeholder={'Your message'}/>
            </form>
            <button type={'submit'} className={s.buttonContainer}>Send</button>
        </div>
    </div>
}

export default Contacts;