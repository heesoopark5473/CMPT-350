import React, { Component } from 'react';
import { firebase } from '../../firebase';
import style from './posts.module.css';
import PostInfo from './postinfo';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './postHeader';
import ReactModal from 'react-modal';
import parse from 'html-react-parser';

class Posts extends Component {

    state ={
        posts : [],
        showModal: false,
        clickedItem: [],
        body:'',
        imageURL:''
    }

    componentWillMount(){
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        firebase.firestore().collection('posts')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                this.setState(prevState => ({
                    posts: [...prevState.posts, documentSnapshot.data()]
                }))
            })
        })
    }

    handleOpenModal(item) {
        this.getImageURL(item.image)
        this.setState({clickedItem: item})
        this.setState({body: item.body})
        this.setState({showModal: true})
    }
    handleCloseModal() {
        this.setState({showModal: false})
    }

    getAuthor = () => {
        let template = null;
        template = this.state.posts.map( (item, i) => (
            <div>
                {item.author}
            </div>
        ))
        return template; 
    }

    getTitle = () => {
        let template = null;
        template = this.state.posts.map( (item, i) => (
            <div>  
               {item.title}
            </div>
        ))
        return template; 
    }

    getPosts = () => {
        let template = null;
        template = this.state.posts.map( (item, i) => (
        <CSSTransition
            classNames={{
                enter:style.postList_wrapper,
                enterActive:style.postList_wrapper_enter
            }}
            timeout={500}
            key={i}
        >
            <div className={style.postlist_item} onClick={() => this.handleOpenModal(item)}>
                <PostInfo author={item.author} title={item.title}/>
                <h2>{item.title}</h2>
            </div>
        </CSSTransition>
        ))
        return template;
    }


    getImageURL = (filename) => {
        firebase.storage().ref('images')
        .child(filename).getDownloadURL()
        .then(url => {
            this.setState({
                imageURL: url
            })
        })
    }

    render() {
        let header;

        header = <Header
            author={this.state.clickedItem.author}
            title={this.state.clickedItem.title}
        />
        if(this.state.clickedItem.image === "") {
            return( 

                    <div>
                        <ReactModal
                            isOpen={this.state.showModal}
                            contentLabel="Post Listing"
                        >
                            <button onClick={this.handleCloseModal}>Close</button>
                            <div className={style.articlewrapper}>
                                {header}
                                <div className={style.articleBody}>
                                    <h1>{this.state.clickedItem.title}</h1>
                                </div>
                                <div className={style.articleText}>
                                    {parse(this.state.body)}
                                    {/* {this.state.body} */}
                                </div>
                            </div>
                        </ReactModal>
                        <TransitionGroup
                            component="div"
                            className="list"
                        >
        
                        {this.getPosts()}
                        </TransitionGroup>
                    </div>
                
            )
        }else{
            return(
                <div>
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="Post Listing"
                    >
                        <button onClick={this.handleCloseModal}>Close</button>
                        <div className={style.articlewrapper}>
                            {header}
                            <div className={style.articleBody}>
                                <h1>{this.state.clickedItem.title}</h1>
                                <div className={style.articleImage}
                                    style={{
                                        height: 700,
                                        background: `url(${this.state.imageURL})`
                                    }}
                                >
                                </div>
                            </div>
                            <div className={style.articleText}>
                                {parse(this.state.body)}
                            </div>
                        </div>
                    </ReactModal>
                    <TransitionGroup
                        component="div"
                        className="list"
                    >
    
                    {this.getPosts()}
                    </TransitionGroup>
                </div>
            )   
        }
    }
}
export default Posts;