import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

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

    return (
        <>
        <Link to={{pathname:'/new-desease/'}}>New desease</Link>
        <div className="flex">
            {deseases.map(desease => {
            return (
                <Link to={{pathname:'/deseases/' + desease.id}}>
                 
                <p>
                    {desease.title} 
                    {desease.description} 
                    {desease.body_part}
                </p>
                </Link>
            )}
            )}
            
        </div>

        </>
    );
};

export default DeseaseContainer