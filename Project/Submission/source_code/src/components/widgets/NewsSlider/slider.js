import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplates from './slider_template';
import { NEWS_URL, NEWS_KEY } from '../../../config';

class NewsSlider extends Component {

    state ={
        news: []
    }

    componentWillMount() {
        axios.get(`${NEWS_URL}country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.amount}&q=${this.props.city}&apiKey=${NEWS_KEY}`)
        .then( response => {
            this.setState({
                news: response.data.articles
            })
        })
    }

    render() {
        return(
            <SliderTemplates data={this.state.news} type={this.props.type} setting={this.props.settings}/>
        )
    }
}

export default NewsSlider;