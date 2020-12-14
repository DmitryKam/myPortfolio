import React from 'react';
import s from './Nav.module.scss';

function Nav() {

    return (
        <div className={s.nav}>
            <a className={s.items} href="">Главная</a>
            <a className={s.items} href="">Скиллы</a>
            <a className={s.items} href="">Проекты</a>
            <a className={s.items} href="">Контакты</a>
        </div>
    )
}

export default Nav;