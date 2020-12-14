import React from 'react';
import s from './Nav.module.scss';

function Nav() {

    return (
        <div className={s.nav}>
            <a className={s.items} href="">General</a>
            <a className={s.items} href="">Skills</a>
            <a className={s.items} href="">Project</a>
            <a className={s.items} href="">Contact</a>
        </div>
    )
}

export default Nav;