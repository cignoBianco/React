import React from "react"
import axios from 'axios'
import {
    Form,
    Button
} from 'react-bootstrap'

const CreateNewDesease = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {title: event.target.title.value,
            description: event.target.description.value,
            body_type: event.target.body_type.value,
        }
            
        axios.post('/deseases', data, {headers: {
            'Content-Type': 'application/json',
            }})
            .then(response => console.log(response))
            .catch((err) => console.log(err))
            .then(setTimeout(() => props.history.push("/deseases"), 600) )
    }

    return(
        <Form  onSubmit={handleSubmit}>
        <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" id="title" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" id="description" />
        </Form.Group>
        <Form.Group controlId="body_part">
            <Form.Label>Body Part</Form.Label>
            <Form.Control type="text" placeholder="body part" id="body_type" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    )
};

export default CreateNewDesease