import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Form,
    Button, 
    Container
} from 'react-bootstrap'

const EditDesease = (props) => {

    let params = props.match.params;

    const [desease, setDesease] = useState([]);
    const [localTitle, setLocalTitle] = useState('');
    const [localDescription, setLocalDescription] = useState('');

    useEffect(() => {
        axios.get('/deseases/'+params.id)
        .then(
            response => {
                setDesease(response.data)
                setLocalTitle(response.data.title)
                setLocalDescription(response.data.description)
            }
        )
    }, [])

    const handleTitleChange = (event) => {
        setLocalTitle( event.target.value )
    }

    const handleDescriptionChange = (event) => {
        setLocalDescription( event.target.value )
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const title = event.target.title.value
        const description = event.target.description.value
        const data = {
            title: title,
            description: description
        }

        axios.put("/deseases/"+desease.id, data, {headers: {
            'Content-Type': 'application/json',
        }})
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .then(setTimeout(() =>  props.history.push("/deseases"), 700 ))
    }

    return(
        <Container>
            <div class="mt-5 w-50 text-justify">
                <h1 class="mb-4">Update Desease</h1>
                <Form  onSubmit={handleSubmit}>

                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" id="title"
                        value={localTitle}
                        onChange={handleTitleChange} />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" id="description"
                        value={localDescription}
                        onChange={handleDescriptionChange} />
                </Form.Group>

                <Form.Group controlId="body_part">
                    <Form.Label>Body Part</Form.Label>
                    <Form.Control type="text" placeholder="Body part" id="body_type" />
                    <Form.Text className="text-muted">
                        Head, heart, arms, legs...
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" size="lg" type="submit" block>
                    Submit
                </Button>
                </Form>
            </div>
        </Container>
    )}

export default EditDesease
