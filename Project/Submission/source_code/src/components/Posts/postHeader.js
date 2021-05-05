import React from 'react';
import style from './posts.module.css';

const Header = (props) => {
    return(
        <div>
            <div className={style.articlePostData}>
                <div>
                    Title : 
                    <span> {props.title}</span>
                </div>
                <div>
                    Author : 
                    <span> {props.author}</span>
                </div>
            </div>
        </div>
    )
}

export default Header;