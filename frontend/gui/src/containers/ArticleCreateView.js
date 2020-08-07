import React, { useState } from 'react';
import axios from 'axios'

const ArticleCreate = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const submit = (e) => {
        e.preventDefault()
        
        axios.post(`http://127.0.0.1:8000/api/`, {title, content})
        .then(res => res.json())
        .then(res => console.log(res))
    }

    return (
        <div>
            <h3>Create Article</h3>
            <form onSubmit={submit} >
                <label>Title: </label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                <br />
                <label>Content: </label>
                <input type="text" onChange={(e) => setContent(e.target.value)} value={content} />
                <br />
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
}

export default ArticleCreate;