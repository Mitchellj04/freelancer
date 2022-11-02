import React, { useState } from 'react'

const CreateProject = ({clients}) => {

console.log(clients)

const [createProject, setCreateProject] = useState({
  name: "",
  timeframe: "",
  category: "",
  client_id: "",
  task_id: ""
})

useEffec(() => {
  
})


const handleChange = (e) => {
  setCreateProject( {...createProject, [e.target.name]: e.target.value})
}

const handleSelect = (e) => {
  setCreateProject( {...createProject, [e.target.name]: e.target.id})
  console.log(e.target)
}



const options = clients.map((name) => {
  return <option key={name.id} id={name.id} name={"client_id"} value={createProject.client_id} onSelect={handleSelect}>{name.name}</option>
})

const handleOption = (e) => {
  console.log(e.target.id)
}

console.log(createProject)

  return (
    <div>
      <form>
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

        <select placeholder='Client' onChange={handleOption}>
          <option id="5" placeholder='Client' onChange={handleOption}></option>
          {options}
        </select>

        <button>Create</button>
      </form>
 
    </div>
  )
}

export default CreateProject