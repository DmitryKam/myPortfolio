import React from 'react';
import s from './Contacts.module.css'
import sContainer from '../common/styles/Container.module.css';

function Contacts() {


    return <div className={s.contactsBlock}>
        <div className={`${sContainer.container} ${s.contactsContainer}`}>
            <h2 className={s.title}>Contacts</h2>
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