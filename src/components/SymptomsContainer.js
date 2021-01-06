import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

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
        <>
        <div className="flex">
            {symptoms.map(symptom => {
            return (
                <Link to={{pathname:'/deseases/' + symptom.id}} key={symptom.id}>
                 
                <p>
                    {symptom.title} 
                    {symptom.description} 
                </p>
                </Link>
            )}
            )}
            d c
        </div>
        </>
    );
};

export default SymptomsContainer