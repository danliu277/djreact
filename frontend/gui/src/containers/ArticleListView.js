import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Articles from '../components/Article'
import CustomForm from '../components/Form'

const ArticleList = (props) => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/')
            .then(res => {
                setArticles(res.data)
            })
    }, [])

    return (
        <div>
            <Articles data={articles} />
            <br />
            <h2>Create an Article</h2>
            <CustomForm 
                requestType="post"
                articleId={null}
                buttonText="Create"
            />
        </div>
    );
}

export default ArticleList;