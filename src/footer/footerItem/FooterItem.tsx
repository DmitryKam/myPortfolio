import React from 'react';
import s from './FooterItem.module.scss';


type FooterItemPropsType = {
    icon?: string
}




function FooterItem(props:FooterItemPropsType) {

    const styleBg = {
        backgroundImage: `url(${props.icon})`
    };


    return <div className={s.footerItemContainer} style={styleBg}>

        </div>
}

export default FooterItem;