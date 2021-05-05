import React from 'react';
import VideosList from '../../../widgets/VideosList/videosList';

import {query, order, duration, videoType, definition} from '../../../../config';

const VideosMain = () => {
    return (
        <VideosList
        type="card"
        query={query}
        order={order}
        duration={duration}
        videoType={videoType}
        definition={definition}
        maxResults={10}
        language={'en'}
        title={true}
        loadmore={true}
    />
    )
}

export default VideosMain;