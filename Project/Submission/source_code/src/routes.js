import React from 'react';
import { Switch } from 'react-router-dom';

import Home from './components/Home/home';
import HomeKR from './components/Home/homekr';
import HomeJP from './components/Home/homejp';
import HomeFR from './components/Home/homefr';
import Layout from './hoc/Layout/layout';

import NewsArticle from './components/Articles/News/Post/index';
import NewsMain from './components/Articles/News/Main/index';
import VideosMain from './components/Articles/Videos/Main/index';
import SignIn  from './components/Signin/signin';
import Dashboard from './components/Dashboard/dashboard';
import Posts from './components/Posts/posts';
import PrivateRoutes from './components/AuthRoutes/privateRoutes';
import PublicRoutes from './components/AuthRoutes/publicRoutes';

const Routes = (props) => {
    return(
        <Layout user={props.user}>
            <Switch>
                <PublicRoutes {...props} restricted={false} path="/" exact component={ Home }/>
                <PublicRoutes {...props} restricted={false} path="/kr" exact component={ HomeKR }/>
                <PublicRoutes {...props} restricted={false} path="/jp" exact component={ HomeJP }/>
                <PublicRoutes {...props} restricted={false} path="/fr" exact component={ HomeFR }/>
                <PublicRoutes {...props} restricted={false} path="/news" exact component={NewsMain}/>
                <PublicRoutes {...props} restricted={false} path="/articles/:id" exact component={ NewsArticle }/>
                <PublicRoutes {...props} restricted={false} path="/videos" exact component={VideosMain}/>
                <PublicRoutes {...props} restricted={true} path="/sign-in" exact component={SignIn}/>
                <PrivateRoutes {...props} path="/posts" exact component={Posts}/>
                <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard}/>
            </Switch>
        </Layout>
    )
    
}

export default Routes;