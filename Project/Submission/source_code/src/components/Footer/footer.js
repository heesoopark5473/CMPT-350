import React from 'react';
import style from './footer.module.css';
import { Link } from 'react-router-dom';

import { CURRENT_YEAR } from '../../config';

const Footer = () => {
    return(
        <div className={style.footer}>
            <Link to="/" className={style.logo}>
                <img alt="logo" src="/images/logo_1.png"/>
            </Link>
            <div className={style.right}>
                @HeeSooPark {CURRENT_YEAR} All rights reserved.
            </div>
        </div>
    )
}

export default Footer;