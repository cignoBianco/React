import React from "react"
import axios from 'axios'
import {
    Form,
    Button,
    Container
} from 'react-bootstrap'

const CreateNewSymptom = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {title: event.target.title.value,
            description: event.target.description.value,
        }
                    
        axios.post('/symptoms', data, {headers: {
            'Content-Type': 'application/json',
        }})
            .then(response => console.log(response))
            .catch((err) => console.log(err))
            .then(setTimeout(() => props.history.push("/symptoms"), 700) )
    }

    return(
        <Container>
            <div class="mt-5 w-50 text-justify">
                <h1 class="mb-4">Create Desease</h1>
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
                    <Button variant="primary" size="lg" type="submit" block>
                        Submit
                    </Button>
                </Form> 
            </div>
        </Container>    
    )
};

export default CreateNewSymptom