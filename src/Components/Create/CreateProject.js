import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Button} from '@mui/material'

const CreateProject = ({clients}) => {

  console.log(clients)
  const navigate = useNavigate()
  const [createProject, setCreateProject] = useState({
    name: "",
    timeframe: "",
    category: "",
    client_id: "",
    task_id: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // history.push("/")
    fetch('http://localhost:9292/projects',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(createProject)
        }).then((response) => {
            console.log(response)
        })
  }


  const handleChange = (e) => {
    setCreateProject( {...createProject, [e.target.name]: e.target.value})
  }

  const handleSelect = (e) => {
    setCreateProject( {...createProject, [e.target.name]: e.target.id})
    console.log(e.target.id)
  }

const handleOption = (e) => {
    console.log(e.target.value)
  }

  // const options = clients.map((name) => {
  //   return <option key={name.id} id={name.id} name={"client_id"} value={createProject.client_id} onSelect={handleOption}>{name.name}</option>
  // })

  console.log(createProject)

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type={"text"} 
            placeholder={"Project name..."}
            name={"name"}
            value={createProject.name}
            onChange={handleChange}/>

          <input 
            type={"text"} 
            placeholder={"category..."}
            name={"category"}
            value={createProject.category}
            onChange={handleChange}/>

          <input 
            type={"number"}
            placeholder={0}
            name={"timeframe"}
            value={createProject.value}
            onChange={handleChange}/>

            <label>Clients</label>
                United Illuminating<input name="client_id" value={createProject.select} type="checkbox" id="9" onChange={handleSelect}/>
                Deltek Products<input name="client_id" value={createProject.select} type="checkbox" id="10" onChange={handleSelect}/>
                Collins Construction<input name="client_id" value={createProject.select} type="checkbox" id="11" onChange={handleSelect}/>

          {/* <select placeholder='Client' onChange={handleSelect}>
            <option id="5" value={""} placeholder='Client' onChange={handleOption}></option>
            <option id={"9"} value={createProject.client_id} name={"client_id"} >9</option>
            <option id="10" >Deltek Products</option>
            <option id="11" >Collins Construction</option>
          </select> */}

          <Button >Submit</Button>
        </form>
  
      </div>
    )
}

export default CreateProject