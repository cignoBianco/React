import React from "react"
import axios from 'axios'

const CreateNewDesease = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {title: event.target.title.value,
                        description: event.target.description.value,
                        body_type: event.target.body_type.value,
                    }
                    console.log(data)
                    
        //const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

        axios.post('/deseases', data, {headers: {
            'Content-Type': 'application/json',
            
          }})
            .then(response => console.log(response))
            .catch((err) => console.log(err))
            .then(setTimeout(() => props.history.push("/deseases"), 700) )
        }

        return(
            <div>
              <form onSubmit={handleSubmit}>
                  title
                <input 
                    type="text"
                    id='title'
                  />
                <br />
                description
                <input
                  id='description'
                  type="text"
                  />
                 <br />
                 body type
                 <input
                  id='body_type'
                  type="text"
                  />
                 <br />
                 <button type='submit'> Submit </button>
                 </form>
              <br />
              
            </div>
        )
};

//<button onClick={() => history.replace('/desease')}> Cancel </button>
export default CreateNewDesease;