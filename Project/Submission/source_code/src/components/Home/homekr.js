import React, {Component} from 'react';

import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newsList';
import VideosList from '../widgets/VideosList/videosList';

import {query, order, duration, videoType, definition, city, category} from '../../config';

// import Select from 'react-select';

class HomeKR extends Component{
    render(){
        return(
            <div>
                <NewsSlider
                    type="featured"
                    country={'kr'}
                    city={city}
                    category={category}
                    amount={5}
                    setting={{
                        dots:true
                    }}
                />
                <NewsList
                    type="detail"
                    country={'kr'}
                    city={city}
                    category={category}
                    amount={5}
                    loadmore={true}
                />
                <VideosList
                    type="card"
                    query={query}
                    order={order}
                    duration={duration}
                    videoType={videoType}
                    definition={definition}
                    maxResults={5}
                    language={'kr'}
                    title={true}
                    loadmore={true}
                />
            </div>
        )
    }
}

export default HomeKR;