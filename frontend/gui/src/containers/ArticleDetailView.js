import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { Card } from 'antd';

import CustomForm from '../components/Form'

const ArticleDetail = (props) => {

    const [article, setArticle] = useState({})

    useEffect(() => {
        const articleId = props.match.params.articleId
        if (!isNaN(articleId)) {
            axios.get(`http://127.0.0.1:8000/api/${articleId}`)
                .then(res => {
                    setArticle(res.data)
                })
        }
    }, [props.match.params.articleId])

    return (
        <div>
            <Card title={article.title}>
                <p>{article.content}</p>
            </Card>
            <CustomForm 
                requestType="put"
                articleId={props.match.params.articleId}
                buttonText="Update"
            />
        </div>
    );
}

export default ArticleDetail;