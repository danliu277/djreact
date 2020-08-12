import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios'

const CustomForm = (props) => {

    const handleFormSubmit = (event, requestType, articleId) => {
        event.preventDefault()

        const title = event.target.elements.title.value
        const content = event.target.elements.content.value

        switch(requestType) {
            case 'post':
                axios.post(`http://localhost:8000/api/`, {
                    title,
                    content
                }).then(res => console.log(res))
                .catch(err => console.err(err))
                break;
            case 'put':
                axios.put(`http://localhost:8000/api/${articleId}`, {
                    title,
                    content
                }).then(res => console.log(res))
                .catch(err => console.err(err))
                break;
            default:
                console.log('default')
        }
    }

    return (
        <>
            <Form onSubmitCapture={(event) => handleFormSubmit(event, props.requestType, props.articleId)}>
                <Form.Item label="Title">
                    <Input name="title" placeholder="Put a title here" />
                </Form.Item>
                <Form.Item label="Content">
                    <Input name="content" placeholder="Enter some content..." />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" >{props.buttonText}</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default CustomForm;