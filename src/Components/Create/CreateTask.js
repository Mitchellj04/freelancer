import React from 'react'
import { useState } from 'react'
import { Box, FormGroup, TextField, FormControlLabel, Button, FormControl, InputLabel, Select, MenuItem, Checkbox } from '@mui/material'


const CreateTask = ({projects,
  handleClose,
}) => {

  console.log(projects)
  const [loading, setLoading] = useState()
  const [createTask, setCreateTask] = useState({
    description : "",
    hours: "",
    pay: "",
    due_date: "",
    project_id: "",
    client_id: ""
  })   
  
  function clientIdFinder(integer){
        let clientFinder = projects.find((list) => list.id === integer)
        console.log(clientFinder.client_id)
        let clientId = clientFinder.client_id
        setCreateTask({...createTask, client_id: clientId})
  }
  
  const handleChange = (e) => {setCreateTask( {...createTask, [e.target.name]: e.target.value})}

  const handleSelect = (e) => {
        let integer = parseInt(e.target.id) 
        setCreateTask( {...createTask, [e.target.name]: integer})
        clientIdFinder(integer)
      }

  const projectList = projects.map((project) => {
    return <FormControlLabel 
              key={project.id} 
              label={project.name}
              control={
                <Checkbox 
                  key={project.id} 
                  id={project.id} 
                  name={"project_id"} 
                  value={createTask.project_id} 
                  onChange={handleSelect}/>} >
            </FormControlLabel>
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // history.push("/")
    fetch('http://localhost:9292/tasks',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(createTask)
        }).then((response) => {
            console.log(response)
        })
        setLoading("Loading new task")
        handleClose()
        console.log(createTask)
  }

  
  return (
  
    <Box>
      <div>
        <FormGroup style={{margin: 20, width: 250}}>
          <div>
            <TextField 
              style={{margin: 10, width: "100%"} }
              variant='filled'
              placeholder={"Task Description..."}
              name={"description"}
              value={createTask.description}
              onChange={handleChange}/>
          </div>
          <div>
            <TextField 
              style={{margin: 10, width: "100%"} }
              variant='filled'
              placeholder={"hours..."}
              name={"hours"}
              value={createTask.hours}
              onChange={handleChange}/>
          </div>
          <div>
            <TextField
              style={{margin: 10, width: "100%"} }
              id="outlined-number"
              label="pay"
              name='pay'
              type="number"
              value={createTask.value}
              onChange={handleChange}
              InputLabelProps={{
              shrink: true}}/>
          </div>       
          <div>{projectList}</div>    
        </FormGroup>
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  )
}

export default CreateTask