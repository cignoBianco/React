import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

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
                console.log(response)
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

    return (
        <>
        <div className="flex">
            {desease.title}
            desease
        </div>
        <div>
            {symptoms.map(symptom => {
                return (
                    <Link to={{pathname:'/symptoms/' + symptom.id}} key={symptom.id}>
                    
                    <p>
                        {symptom.title} 
                        {symptom.description} 
                    </p>
                    
                    </Link>
                )}
            )}
        </div>
        <Link to={{pathname:'/edit-desease/' + desease.id}}>Edit</Link>
        <button onClick={deleteId}>delete</button>
        </>
    );
};

export default Desease;