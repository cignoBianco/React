import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Symptome = (props) => {

    let params = props.match.params;
    const [symptom, setSymptom] = useState([]);

    useEffect(() => {
        axios.get('/symptoms/'+params.id)
        .then(
            response => {
                setSymptom(response.data)
            }
        )
    }, [])

    return (
        <>
        <div className="flex">
            {symptom.title}
            {symptom.description}
        </div>
        </>
    );
};

export default Symptome