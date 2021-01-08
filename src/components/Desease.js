import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'

const Desease = (props) => {

    let params = props.match.params;
    const [desease, setDesease] = useState([]);
    const [symptoms, setSymptoms] = useState([]);

    useEffect(() => {
        axios.get('/deseases/'+params.id)
        .then(
            response => {
                setDesease(response.data)
            }
        )

        axios.get('/desease-symptoms/'+params.id)
        .then(
            response => {
                setSymptoms(response.data)
            }
        )
    }, [])

    const deleteId = () => {
        axios.delete("/deseases/"+desease.id)
          .then(res => console.log(res))
          .catch(err => console.log(err))
          .then(setTimeout(() =>  props.history.push("/deseases"), 700 ))
    }

    return (<>
        <Card>
            <Card.Header>{desease.title}</Card.Header>
            <Card.Body>
                <Card.Title>{desease.body_type}</Card.Title>
                <Card.Text>
                    {desease.description}
                </Card.Text>
                <Link to={{pathname:'/edit-desease/' + desease.id}}>
                    <Button variant="dark">
                        Edit
                    </Button>
                </Link>
                <Button variant="secondary" onClick={deleteId}>
                    Delete
                </Button>
            </Card.Body>
            <Card> 
            {symptoms.length > 0 ? "Symptoms: " : ""}
            {symptoms.map(symptom => {
                return (
                    <div  key={symptom.id}>
                    <Link to={{pathname:'/symptoms/' + symptom.id}} key={symptom.id}>
                        <Card.Title>
                            {symptom.title} 
                        </Card.Title>
                    </Link>
                    <Card.Text>
                        {symptom.description}
                    </Card.Text> 
                    </div>
                )}
            )}
        </Card>
            <Card.Footer className="text-muted">{desease.created_at}</Card.Footer>
        </Card>
        
        </>
    );
};

export default Desease;