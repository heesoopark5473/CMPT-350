import React from 'react';

import NewsSlider from '../../../widgets/NewsSlider/slider';
import NewsList   from '../../../widgets/NewsList/newsList';

import {country, city, category} from '../../../../config';


const NewsMain = () => {
    return(
        <div>
            <NewsSlider
                type="featured"
                country={country}
                city={city}
                category={category}
                amount={5}
                setting={{
                    dots:false
                }}
            />
            <NewsList
                type="cardMain"
                country={country}
                city={city}
                category={category}
                amount={20}
                loadmore={true}
            />
        </div>
    )
}

export default NewsMain;