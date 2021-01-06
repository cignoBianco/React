import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Card, CardDeck, Button} from 'react-bootstrap'

const DeseaseContainer = () => {

    const [deseases, setDeseases] = useState([]);
    useEffect(() => {
        axios.get('/deseases')
        .then(
            response => {
                console.log(response)
                setDeseases(response.data)
            }
        )
    }, [])

    return (<><br/>
        <Link to={{pathname:'/new-desease/'}}>
            <Button variant="primary">
                New desease
            </Button>
        </Link>
        <br/><br/>
        
        <CardDeck>
        {deseases.map(desease => {
        return (
        <Card  class="card mb-3" style={{minWidth: "18rem", marginBottom: "1rem"}}>
            <Card.Body>
                <Link to={{pathname:'/deseases/' + desease.id}}>
                    <Card.Title>{desease.title}</Card.Title>
                </Link>
                <i>{desease.body_part}</i>
            <Card.Text>
                {desease.description} 
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated {desease.updated_at} mins ago</small>
            </Card.Footer>
        </Card>
        )}
        )}
        </CardDeck>
</>
    );
};

export default DeseaseContainer