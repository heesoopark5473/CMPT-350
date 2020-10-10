import React, { Component } from 'react';
import style from '../../articles.module.css';
import ReactModal from 'react-modal';
import Header from './header';

class NewsArticles extends Component {
    constructor() {
        super();
        this.state ={ showModal : false }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true})
    }
    handleCloseModal() {
        this.setState({showModal: false})
    }

    render() {
        let header;
        if(this.props.location.state.data.author == null){
            header = <Header 
            date={this.props.location.state.data.publishedAt}
            source={this.props.location.state.data.source}
            author='N/A'
            title={this.props.location.state.data.title}
            url={this.props.location.state.data.url}
            />
        }else{
            header = <Header 
            date={this.props.location.state.data.publishedAt}
            source={this.props.location.state.data.source}
            author={this.props.location.state.data.author}
            title={this.props.location.state.data.title}
            url={this.props.location.state.data.url}
            />
        }

        return(
            <div>
                <button onClick={this.handleOpenModal}>Trigger Modal</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                    <div className={style.articleWrapper}>
                        {header}
                        <div className={style.articleBody}>
                            <h1>{this.props.location.state.data.title}</h1>
                            <div className={style.articleImage}
                                style={{
                                    background: `url(${this.props.location.state.data.urlToImage})`
                                }}
                            ></div>
                            <div className={style.articleText}>
                                {this.props.location.state.data.content}
                            </div>
                        </div>
                    </div>
                    

                </ReactModal>

            </div>
        )

    }
}

export default NewsArticles;