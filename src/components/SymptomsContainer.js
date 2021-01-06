import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Card, CardDeck, Button} from 'react-bootstrap'

const SymptomsContainer = () => {

    const [symptoms, setSymptoms] = useState([]);
    useEffect(() => {
        axios.get('/symptoms')
        .then(
            response => {
                console.log(response)
                setSymptoms(response.data)
            }
        )
    }, [])

    return (
        <><br/>
        <Link to={{pathname:'/new-symptom/'}}>
            <Button variant="primary">
                New symptom
            </Button>
        </Link>
        <br/><br/>

        <CardDeck>
            {symptoms.map(symptom => {
            return (
                <Card  class="card mb-3" style={{minWidth: "18rem", marginBottom: "1rem"}}>
                    <Card.Body>
                        <Link to={{pathname:'/symptoms/' + symptom.id}} key={symptom.id}>
                            <Card.Title>{symptom.title}</Card.Title>
                        </Link>
                        <Card.Text>
                            {symptom.description} 
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated {symptom.updated_at} mins ago</small>
                    </Card.Footer>
                </Card>
                )}
            )}
        </CardDeck>
      </>
    );
};

export default SymptomsContainer