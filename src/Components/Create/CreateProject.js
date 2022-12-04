import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Button, TextField, Box, FormGroup} from '@mui/material'


const CreateProject = ({handleCreateProject, projects, setProjects}) => {

  // console.log(clients)
  const navigate = useNavigate()
  const [createProject, setCreateProject] = useState({
    name: "",
    timeframe: "",
    category: ""
  })

  const handleChange = (e) => {setCreateProject( {...createProject, [e.target.name]: e.target.value})}
    
    const handleSubmit = (e) => {
      handleCreateProject(createProject)
  }
    return (
      <Box>
        <div>
          <FormGroup style={{margin: 20, width: 250}} >
            <div>
              <TextField 
                style={{margin: 10, width: "100%"} }
                variant='filled'
                placeholder={"Project name..."}
                name={"name"}
                value={createProject.name}
                onChange={handleChange}/>
            </div>
            <div>
              <TextField 
                style={{margin: 10, width: "100%"} }
                variant='filled'
                placeholder={"category..."}
                name={"category"}
                value={createProject.category}
                onChange={handleChange}/>
            </div>
            <div>
              <TextField
                style={{margin: 10, width: "100%"} }
                id="outlined-number"
                label="TimeFrame"
                name='timeframe'
                type="number"
                value={createProject.value}
                onChange={handleChange}
                InputLabelProps={{
                shrink: true,}}/>
            </div>   
          </FormGroup>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </Box>
    )
}

export default CreateProject