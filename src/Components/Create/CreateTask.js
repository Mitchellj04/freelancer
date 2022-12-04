import React from 'react'
import { useState } from 'react'
import { Box, FormGroup, TextField, FormControlLabel, Button, FormControl, InputLabel, Select, MenuItem, Checkbox } from '@mui/material'


const CreateTask = ({projects, setProjects,
  handleClose,
}) => {

  // console.log(projects)
  const [loading, setLoading] = useState()
  const [createTask, setCreateTask] = useState({
    description : "",
    hours: "",
    pay: "",
    due_date: "",
    project_id: "",
    client_id: ""
  })   

  // console.log(projects)
  
  function clientIdFinder(integer){
        let projectFinder = projects.find((list) => list.id === integer)
        console.log(projectFinder.tasks)
        let projectId = projectFinder.id
        setCreateTask({...createTask, project_id: projectId})
  }
  
  const handleChange = (e) => {setCreateTask( {...createTask, [e.target.name]: e.target.value})}

  const handleSelect = (e) => {
        let integer = parseInt(e.target.id) 
        setCreateTask( {...createTask, [e.target.name]: integer})
        clientIdFinder(integer)
      }

  
  const projectList = projects.map((project) => {
    let taskId = project.id
    return <FormControlLabel 
              key={project.id} 
              label={project.name}
              control={
                <Checkbox 
                  key={project.id} 
                  id={taskId.toString()} 
                  name={"project_id"} 
                  value={createTask.project_id} 
                  onChange={handleSelect}/>} >
            </FormControlLabel>
  })

  const handleTaskCreate = (create) => {
    
    fetch('http://localhost:9292/tasks',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(create)
        }).then((resp) => resp.json())
          .then((setList) => console.log(setList))
        setLoading("Loading new task")
        handleClose()
  }

  const taskCreator = (newTask) => {
    handleTaskCreate(newTask)

    const updatedTasks = projects.map((project) => 
      project.task.id === newTask.id ? newTask : project
    )

    setProjects(updatedTasks)
  }
  
  const handleSubmit = () => {
  taskCreator(createTask)  
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