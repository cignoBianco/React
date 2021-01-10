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
    const [symptoms, setSymptoms] = useState([]);
    const [localTitle, setLocalTitle] = useState('');
    const [localDescription, setLocalDescription] = useState('');
    const [localBodyPart, setLocalBodyPart] = useState('');

    useEffect(() => {
        axios.get('/deseases/'+params.id)
        .then(
            response => {
                setDesease(response.data)
                setLocalTitle(response.data.title)
                setLocalDescription(response.data.description)
                setLocalBodyPart(response.data.body_part)
            }
        )

        axios.get('/symptoms/')
        .then(
            response => {
                setSymptoms(response.data)
            }
        )
    }, [])

    const handleTitleChange = (event) => {
        setLocalTitle( event.target.value )
    }

    const handleDescriptionChange = (event) => {
        setLocalDescription( event.target.value )
    }

    const handleBodyPartChange = (event) => {
        setLocalBodyPart( event.target.value )
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let arrayChecked = []
        let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
        for (var i = 0; i < checkboxes.length; i++) {
            arrayChecked.push(checkboxes[i].id)
        }
       
        const title = event.target.title.value
        const description = event.target.description.value
        const body_part = event.target.body_part.value
        const data = {
            title: title,
            description: description,
            body_part: body_part,
            id: desease.id,
            symptoms_id: arrayChecked
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
            <div className="mt-5 w-50 text-justify">
                <h1 className="mb-4">Update Desease</h1>

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
                    <Form.Control type="text" placeholder="Body part" id="body_part" 
                        value={localBodyPart}
                        onChange={handleBodyPartChange} />
                    <Form.Text className="text-muted">
                        Head, heart, arms, legs...
                    </Form.Text>
                </Form.Group>

                <h2>Symptoms:</h2>
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
    )}

export default EditDesease
