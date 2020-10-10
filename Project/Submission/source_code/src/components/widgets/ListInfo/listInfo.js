import React from 'react';
import FontAwesome from 'react-fontawesome';

import style from './listInfo.module.css';

const ListInfo = (props) => {
    return(
        <div className={style.listInfo}>
            <span className={style.providerName}>
                {props.provider}
            </span>
            <span className={style.date}>
                <FontAwesome name="clock-o"/>
                {props.date}
            </span>
        </div>
    )
}

export default ListInfo;