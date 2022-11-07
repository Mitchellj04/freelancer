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

    const handleChange = (e) => {
        setCreateClient({...createClient, [e.target.name]: e.target.value})
    }

  return (
    <div>
        <form>
            <input 
                placeholder='Compnay name ....'
                type={"text"}
                name={"name"}
                value={createClient.name}
                onChange={handleChange}/>
            <input 
                placeholder='Manager name...'
                type={""}
                name={"manager"}
                value={createClient.manager}
                onChange={handleChange}/>
            <input 
                placeholder='contact info'
                type={"text"}
                name={"contact"}
                value={createClient.contact}
                onChange={handleChange}/>
            
            <button onClick={handleSubmit}>Create</button>
        </form>


    </div>
  )
}

export default CreateClient