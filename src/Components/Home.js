import React from 'react'
import ProjectList from './lists/ProjectList'
import SideBar from './SideBar'
import CreateProject from './Create/CreateProject'
import CreateTask from './Create/CreateTask'
import './CSS/Home.css'
import {Dialog, DialogTitle, DialogContent, DialogActions, AppBar, Fab, Grid, Menu, MenuItem} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import {useState} from 'react'


const Home = ({
  clients, 
  setClients, 
  projects, 
  setProjects,
  }) => {

  const [openProject, setOpenProject] = useState(false);
  const [openTask, setOpenTask] = useState(false);
  const [anchorEl ,setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  // console.log(projects)

  const handleClose = () => {
    setOpenProject(false);
    setOpenTask(false)
  };

  const handleClick = (event) => {setAnchorEl(event.currentTarget)}

  const handleClickClose = () => {setAnchorEl(null)}

  const menuProject = () => {
    setOpenProject(true);
    setAnchorEl(null);
  }
  const menuTask = () => {
    setOpenTask(true);
    setAnchorEl(null);
  }


  const handleCreateProject = (create) => {
    fetch('http://localhost:9292/projects',{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(create)
      }).then((response) => {
          console.log(response)
      })

    handleClose()
  }


  return (
   
      
  
    <Grid container spacing={2} style={{boxShadow:" 5px 5px 5px 5px yellow"}}> 
        <Grid item xs={3}>
          <SideBar clients={clients} setClients={setClients}/>
        </Grid>
        <Grid item xs={9}>
          <div className='dialog-container'>
            <Dialog 
                open={openProject}
                style={{width: "100%"}}
                keepMounted
                onClose={handleClose}
                >
              <DialogTitle>Create Project</DialogTitle>
              <DialogContent><CreateProject handleClose={handleClose} handleCreateProject={handleCreateProject}/></DialogContent>
              <DialogActions>
                {/* <Button onClick={handleClose}>Cancel</Button> */}
              </DialogActions>
            </Dialog> 
            <Dialog 
                open={openTask}
                style={{width: "100%"}}
                keepMounted
                onClose={handleClose}
                >
              <DialogTitle>Create Task</DialogTitle>
              <DialogContent><CreateTask projects={projects} handleClose={handleClose}/></DialogContent>
              <DialogActions>
                {/* <Button onClick={handleClose}>Cancel</Button> */}
              </DialogActions>
            </Dialog> 
          </div>

          <div className='list-container'>
              <ProjectList projects={projects} setProjects={setProjects}/>

            <AppBar 
              position="fixed" 
              elevation={0} 
              color="primary" 
              style={{top: "auto", bottom: 0, alignItems: "center", background: "transparent"}}>
                <Fab 
                  id="plus-button"
                  onClick={handleClick} 
                  style={{background: "#1976D2", color: "white"}} 
                  aria-controls={open ? 'create-menu' : undefined}
                  aria-haspopup={"true"}
                  aria-expanded={open ? true : undefined}>
                  <AddIcon/>
                </Fab>
                <Menu
                    id="create-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClickClose}
                    MenuListProps={{
                      'aria-labelledby': 'plus-button',
                    }}>
                  <MenuItem onClick={menuProject}>Create Project</MenuItem>
                  <MenuItem onClick={menuTask}>Create Task</MenuItem>
                </Menu>
            </AppBar>

          </div>
        </Grid>
    </Grid>

    
  )
}

export default Home