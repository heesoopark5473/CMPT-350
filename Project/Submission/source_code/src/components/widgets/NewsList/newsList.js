import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';
import ReactModal from 'react-modal';

import { NEWS_URL, NEWS_KEY } from '../../../config';
import style from './newsList.module.css';
import Button from '../Buttons/buttons';
import ListInfo from '../../widgets/ListInfo/listInfo';
import Header from './header';

class NewsList extends Component {
    
    state = {
        items:[],
        country: this.props.country,
        city: this.props.city,
        category: this.props.category,
        amount: this.props.amount,
        showModal: false,
        clickedItem: []
    }

    componentWillMount(){
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.request(this.state.country, this.state.city, this.state.category, this.state.amount)
    }

    loadMore =() => {
        this.setState({amount: this.state.amount+5})
        // this.state.amount = this.state.amount + 5;
        this.request(this.request(this.state.country, this.state.city, this.state.category, this.state.amount))
    }

    request = (country, city, category, amount ) => {
        axios.get(`${NEWS_URL}country=${country}&category=${category}&pageSize=${amount}&q=${city}&apiKey=${NEWS_KEY}`)
        .then( response => {
            this.setState({
                items:response.data.articles
            })
        })
    }

    handleOpenModal(item) {
        this.setState({clickedItem: item})
        this.setState({showModal: true})
    }
    handleCloseModal() {
        this.setState({showModal: false})
    }

    renderNews = (type) => {
        let template = null;
        switch(type){
            case('detail'):
                template = this.state.items.map( (item, i) => (
                    <CSSTransition
                        classNames={{
                            enter:style.newsList_wrapper,
                            enterActive:style.newsList_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        <div>
                            <div className={style.newslist_item} onClick={()=> this.handleOpenModal(item)}>
                                {/* <Link to={{
                                    pathname: `articles/${i}`,
                                    state: {
                                        data: item
                                    }
                                }}> */}
                                {/* <a href={item.url}> */}
                                    <ListInfo provider={item.source.name} date={item.publishedAt}/>
                                    <h2>{item.title}</h2>
                                {/* </a> */}
                                {/* </Link> */}
                            </div>
                        </div>
                    </CSSTransition>
                ))
                break;
            case('cardMain'):
                template = this.state.items.map( (item, i) => (
                    <CSSTransition
                        classNames={{
                            enter:style.newsList_wrapper,
                            enterActive:style.newsList_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        {/* <Link to={{
                            pathname:`articles/${i}`,
                            state: {
                                data:item
                            }
                        }}> */}
                            <div className={style.flex_wrapper} onClick={()=> this.handleOpenModal(item)}>
                                <div className={style.left}
                                    style={{
                                        background: `url(${item.urlToImage})`
                                    }}>
                                    <div></div>
                                </div>
                                <div className={style.right} >
                                    <ListInfo provider={item.source.name} date={item.publishedAt}/>
                                    <h2>{item.title}</h2>
                                </div>
                            </div>
                        {/* </Link> */}
                    </CSSTransition>
                ))
                break;
            default:
                template=null;
        }
        return template;
    }

    render() {
        let header;
        let body;
        if(this.state.clickedItem.content == null){
            body = this.state.clickedItem.description
        }else{
            body = this.state.clickedItem.content
        }
        if(this.state.clickedItem.author == null){
            header = <Header 
            date={this.state.clickedItem.publishedAt}
            source={this.state.clickedItem.source}
            author='N/A'
            title={this.state.clickedItem.title}
            url={this.state.clickedItem.url}
            />
        }else{
            header = <Header 
            date={this.state.clickedItem.publishedAt}
            source={this.state.clickedItem.source}
            author={this.state.clickedItem.author}
            title={this.state.clickedItem.title}
            url={this.state.clickedItem.url}
            />
        }
        return(
            <div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <button onClick={this.handleCloseModal}>Close</button>
                    <div className={style.articleWrapper}>
                        {header}
                        <div className={style.articleBody}>
                            <h1>{this.state.clickedItem.title}</h1>
                            <div className={style.articleImage}
                                style={{
                                    background: `url(${this.state.clickedItem.urlToImage})`
                                }}
                            ></div>
                            <div className={style.articleText}>
                                {body}
                            </div>
                        </div>
                    </div>
                </ReactModal>

                <TransitionGroup
                    component="div"
                    className="list"
                >
                    { this.renderNews( this.props.type )}
                </TransitionGroup>
                <Button
                    type="loadmore"
                    loadMore={()=>this.loadMore()}
                    cta="Load More News"
                />
            </div>
        )
    }
}

export default NewsList;