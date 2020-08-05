import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Articles from '../components/Article'

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const ArticleList = (props) => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api')
            .then(res => {
                setArticles(res.data)
                console.log(res.data)
            })
    }, [])

    return (
        <Articles data={listData} />
    );
}

export default ArticleList;