import { Button, FormGroup, TextField } from '@mui/material'
import React from 'react'
import {useState} from 'react'

const CreateClient = () => {

    const [createClient, setCreateClient] = useState({
        name: "",
        contact: "",
        manager: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:9292/clients',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(createClient)
        }).then((response) => {
            console.log(response)
        })
    }

    const handleChange = (e) => {setCreateClient({...createClient, [e.target.name]: e.target.value})}

  return (
    <div>
        <FormGroup style={{margin: 20, width: 250}}>
            <TextField 
                style={{margin: 10, width: "100%"}} 
                variant='filled'
                placeholder='Compnay name ....'
                name={"name"}
                value={createClient.name}
                onChange={handleChange}>
            </TextField>
            <TextField 
                style={{margin: 10, width: "100%"}}
                variant='filled'
                placeholder='Manager name ....'
                name={"manager"}
                value={createClient.manager}
                onChange={handleChange}>
            </TextField>
            <TextField 
                style={{margin: 10, width: "100%"}}
                variant='filled'
                placeholder='contact info ....'
                name={"contact"}
                value={createClient.contact}
                onChange={handleChange}>
            </TextField>        
            <Button onClick={handleSubmit}>Create</Button>
        </FormGroup>


    </div>
  )
}

export default CreateClient