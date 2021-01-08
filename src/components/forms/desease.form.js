import React, {useState, useEffect} from "react"
import axios from 'axios'
import {
    Form,
    Button, 
    Container
} from 'react-bootstrap'

const CreateNewDesease = (props) => {

    const [symptoms, setSymptoms] = useState([]);

    useEffect(() => {
        axios.get('/symptoms/')
        .then(
            response => {
                setSymptoms(response.data)
            }
        )
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()

        let arrayChecked = []
        let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
        for (var i = 0; i < checkboxes.length; i++) {
            arrayChecked.push(checkboxes[i].id)
        }

        const data = {
            title: event.target.title.value,
            description: event.target.description.value,
            body_type: event.target.body_type.value,
            symptoms_id: arrayChecked
        }
            
        axios.post('/deseases', data, {headers: {
            'Content-Type': 'application/json',
            }})
            .then(response => console.log(response))
            .catch((err) => console.log(err))
            .then(setTimeout(() => props.history.push("/deseases"), 700) )
    }

    return(
        <Container>
            <div class="mt-5 w-50 text-justify">
                <h1 class="mb-4">Create Desease</h1>
                <Form  onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" id="title" />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" id="description" />
                </Form.Group>
                <Form.Group controlId="body_part">
                    <Form.Label>Body Part</Form.Label>
                    <Form.Control type="text" placeholder="Body part" id="body_type" />
                    <Form.Text className="text-muted">
                        Head, heart, arms, legs...
                    </Form.Text>
                </Form.Group>
                {symptoms.map(symptom => 
                {return(
                <div>
                    <input type="checkbox" id={symptom.id} name={symptom.title}/>
                    <label for={symptom.title}>{symptom.title}</label>
                </div>
                )})}
                <Button variant="primary" size="lg" type="submit" block>
                    Submit
                </Button>
                </Form>
            </div>
        </Container>
    )
};

export default CreateNewDesease