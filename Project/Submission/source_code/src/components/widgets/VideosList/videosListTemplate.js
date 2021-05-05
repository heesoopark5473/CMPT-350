import React from 'react';
import style from './videosList.module.css';
import ListInfo from '../ListInfo/listInfo';

import Youtube from 'react-youtube';

const VideosListTemplate = (props) => {

    const opts = {
        height: '200',
        width: '500',
        // playerVars: {
        //     autoplay: 1
        // }
    }
    return props.data.map( (item, i) => (
        <div>
            <div className={style.videoListItem_wrapper}>
                <div className={style.left}>
                    <Youtube 
                        videoId={item.id.videoId}
                        opts={opts}
                    />
                </div>
                <div className={style.right}>
                    <ListInfo provider={item.snippet.channelTitle} date={item.snippet.publishedAt}/>
                    <h2>{item.snippet.title}</h2>
                </div>
            </div>
        </div>
    ))

}

export default VideosListTemplate;
