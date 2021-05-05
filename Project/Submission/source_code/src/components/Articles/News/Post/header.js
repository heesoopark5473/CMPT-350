import React from 'react';
import style from '../../articles.module.css';

const Header = (props) => {
    return(
        <div>
            <div className={style.articlePostData}>
                <div>
                    Title : 
                    <span> {props.title}</span>
                </div>
                <div>
                    Publisher : 
                    <span> {props.source.name}</span>
                </div>
                <div>
                    Author : 
                    <span> {props.author}</span>
                </div>
                <div>
                    Date : 
                    <span> {props.date}</span>
                </div>
            </div>
        </div>
    )
}

export default Header;