import React, { Component } from 'react';
import style from './videosList.module.css';
import axios from 'axios';

import { YOUTUBE_URL, YOUTUBE_KEY } from '../../../config';
import Button from '../Buttons/buttons';
import VideosListTemplate from './videosListTemplate';

class VideosList extends Component {
    state = {
        videos: [],
        query: this.props.query,
        order: this.props.order,
        duration: this.props.duration,
        videoType: this.props.videoType,
        definition: this.props.definition,
        maxResults: this.props.maxResults,
        language: this.props.language
    }

    renderTitle = () => {
        return this.props.title ? 
            <h3><strong>COVID-19</strong> Videos</h3>
            : null
    }

    componentWillMount(){
        this.request(this.state.query, this.state.order, this.state.duration, this.state.videoType, this.state.definition, this.state.maxResults, this.state.language)
    }

    request = (query, order, duration, videoType, definition, maxResults, language) => {
        axios.get(`${YOUTUBE_URL}/search?part=snippet&q=${query}&order=${order}&videoDuration=${duration}&type=${videoType}&videoDefinition=${definition}&maxResults=${maxResults}&relevanceLanguage=${language}&key=${YOUTUBE_KEY}`)
        .then( response => {
            this.setState({
                videos: response.data.items
            })
        })
    } 



    renderVideos = () => {
        let template = null;
        switch(this.props.type){
            case('card'):
                template = <VideosListTemplate data={this.state.videos}/>
                break;
            default:
                template = null
        }
        return template;
    }

    loadMore = () => {
        this.setState({maxResults: this.state.maxResults+5})
        // this.state.maxResults = this.state.maxResults + 5;
        this.request(this.state.query, this.state.order, this.state.duration, this.state.videoType, this.state.definition, this.state.maxResults, this.state.language)    
    }

    renderButton = () => {
        return this.props.loadmore ? 
            <Button
                type="loadmore"
                loadMore={() => this.loadMore()}
                cta="Load More Videos"
            />
            : 
            <Button type="linkTo" cta="More Videos" linkTo="/videos"/>
    }

    render(){
        return(
            <div className={style.videosList_wrapper}>
                { this.renderTitle() }
                { this.renderVideos() }
                { this.renderButton() }
            </div>
        )
    }
}

export default VideosList;