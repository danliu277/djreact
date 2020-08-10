import React from 'react'
import { Route } from 'react-router-dom'
import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import ArticleCreate from './containers/ArticleCreateView';

const BaseRouter = () => {
    return (
        <div>
            <Route exact path='/' component={ArticleList} />
            <Route exact path='/:articleId' component={ArticleDetail} />
            <Route exact path='/newArticle' component={ArticleCreate} />
        </div>
    )
};

export default BaseRouter;