import React from 'react';
import sContainer from '../common/styles/Container.module.scss';
import s from './Footer.module.scss';
import FooterItem from './footerItem/FooterItem';
import insta from '../assets/icon/instagram.svg';
import telega from '../assets/icon/telegram.svg';
import faceBook from '../assets/icon/facebook.svg';
import linkedIn from '../assets/icon/linkedin.svg';


function Footer() {



    return <div className={s.footerBlock}>
        <div className={`${sContainer.container} ${s.footerContainer}`}>
            <h2 className={s.title}>Dmitry</h2>
            <div className={s.itemsConatiner}>
                <FooterItem icon={insta} />
                <FooterItem icon={telega}/>
                <FooterItem icon={faceBook}/>
                <FooterItem icon={linkedIn}/>

            </div>
            <span className={s.titleContainer}> © 2020 All rights reserved</span>

        </div>
    </div>
}

export default Footer;