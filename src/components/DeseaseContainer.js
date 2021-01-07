import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Card, CardDeck, Button} from 'react-bootstrap'
import TimeAgo from './helpers/TimeAgo'

const DeseaseContainer = () => {

    const [deseases, setDeseases] = useState([]);
    const [result, setResult] = useState([]);
    useEffect(() => {
        axios.get('/deseases')
        .then(
            response => {
                console.log(response)
                setDeseases(response.data)
                setResult(response.data)
            }
        )
    }, [])

    const sortIt = (type) => {  
        if (type === "ALL") setResult(deseases)
        else
        setResult(
            deseases.filter(t => 
                t.body_part && t.body_part.toLowerCase().includes(type.toLocaleLowerCase())
            )
        )
    }

    return (<><br/>
        <Link to={{pathname:'/new-desease/'}}>
            <Button variant="primary">
                New desease
            </Button>
        </Link>
        <br/><br/>
        <span onClick={() => sortIt("HEAD")}>head </span> 
        <span onClick={() => sortIt("ARM")}>arm </span> 
        <span onClick={() => sortIt("ALL")}>all </span>
        
        <CardDeck>
        {result.map(desease => {
        let timeAgo = TimeAgo(desease.updated_at);
        return (
        <Card  className="card mb-3" style={{minWidth: "18rem", marginBottom: "1rem"}}>
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
            <small className="text-muted">Last updated {timeAgo}</small>
            </Card.Footer>
        </Card>
        )}
        )}
        </CardDeck>
</>
    );
};

export default DeseaseContainer