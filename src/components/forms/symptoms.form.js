import React from "react"
import axios from 'axios'

const CreateNewSymptom = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {title: event.target.title.value,
                        description: event.target.description.value,
                    }
                    console.log(data)
                    
        //const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

        axios.post('/symptoms', data, {headers: {
            'Content-Type': 'application/json',
            
          }})
            .then(response => console.log(response))
            .catch((err) => console.log(err))
            .then(setTimeout(() => props.history.push("/symptoms"), 700) )
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
                
                 <button type='submit'> Submit </button>
                 </form>
              <br />
              
            </div>
        )
};

//<button onClick={() => history.replace('/desease')}> Cancel </button>
export default CreateNewSymptom