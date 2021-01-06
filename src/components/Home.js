import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom"
import { Link } from 'react-router-dom';
import axios from 'axios'

const Home = () => {

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

    const [searchTerm, setSearchTerm] = React.useState("");
    const handleChange = event => {
      setSearchTerm(event.target.value);
    };

    const results = deseases.filter(t =>
        t.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

      //const results = 

  return (
    <>
      <div className="flex">
          <h1>Home</h1>

            

        <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
        />
       
      </div>

       

      {results.map(desease => {
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
    </>
  );
};
/*  {deseases.map(item => (
    <li>{item}</li>
    ))}*/



export default Home