import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const EditDesease = (props) => {
  //const [stateLocal, setState] = useState({ title: props.location.state.post.post.title,
    //                                        description: props.location.state.post.post.description
      //                                    })

    let params = props.match.params;
    const [desease, setDesease] = useState([]);

    const [localTitle, setLocalTitle] = useState('');
    const [localDescription, setLocalDescription] = useState('');

    useEffect(() => {
        axios.get('/deseases/'+params.id)
        .then(
            response => {
                setDesease(response.data)
                setLocalTitle(response.data.title)
                setLocalDescription(response.data.description)
            }
        )
    }, [])


    const handleTitleChange = (event) => {
        setLocalTitle( event.target.value )
      }

      const handleDescriptionChange = (event) => {
        setLocalDescription( event.target.value )
      }


  const handleSubmit = (event) => {
    event.preventDefault()

    const title = event.target.title.value
    const description = event.target.description.value

    const data = {title: title,
                  description: description
                 }
    axios.put("/deseases/"+desease.id, data, {headers: {
        'Content-Type': 'application/json',

      }})
      .then(res => console.log(res))
      .catch(err => console.log(err))
      .then(setTimeout(() =>  props.history.push("/deseases"), 700 ))
  }


    return(
        <div>
          <form onSubmit={handleSubmit}>
            title
            <input
              id='title'
              type="text"
              value={localTitle}
              onChange={handleTitleChange}
            />
            <br />
            description
            <input
              id='description'
              type="text"
              value={localDescription}
              onChange={handleDescriptionChange}
              />
          <br />
          <button type="submit"> Submit </button>
          </form>
          <br />
        </div>
    )}

export default EditDesease
