import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { Card } from 'antd';

const ArticleDetail = (props) => {

    const [article, setArticle] = useState({})

    useEffect(() => {
        const articleId = props.match.params.articleId

        axios.get(`http://127.0.0.1:8000/api/${articleId}`)
            .then(res => {
                setArticle(res.data)
            })
    }, [props.match.params.articleId])

    return (
        <Card title={article.title}>
            <p>{article.content}</p>
        </Card>
    );
}

export default ArticleDetail;