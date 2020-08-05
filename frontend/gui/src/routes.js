import React from 'react'
import { Route } from 'react-router-dom'
import ArticleList from './containers/ArticleListView';

const BaseRouter = () => {
    return (
        <div>
            <Route exact path='/' component={ArticleList} />
            <Route exact path='/:articleId' component={ArticleList} />
        </div>
    )
};

export default BaseRouter;