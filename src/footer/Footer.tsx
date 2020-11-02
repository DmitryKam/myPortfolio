import React from 'react';
import sContainer from '../common/styles/Container.module.css';
import s from './Footer.module.css';
import FooterItem from './footerItem/FooterItem';


function Footer() {


    return <div className={s.footerBlock}>
        <div className={`${sContainer.container} ${s.footerContainer}`}>
            <h2 className={s.title}>Dmitry Kamlykou</h2>
            <div className={s.itemsConatiner}>
                <FooterItem/>
                <FooterItem/>
                <FooterItem/>
                <FooterItem/>
            </div>
            <span className={s.titleContainer}> © 2020 All rights reserved</span>

        </div>
    </div>
}

export default Footer;