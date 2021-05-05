import React from 'react';
import style from './postinfo.module.css';

const PostInfo = (props) => {
    return(
        <div className={style.listInfo}>
            <span className={style.authorName}>
                {props.author}
            </span>
        </div>
    )
}

export default PostInfo;