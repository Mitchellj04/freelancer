import React from 'react'
import ProjectList from './Projects/ProjectList'
import SideBar from './SideBar'
import CreateProject from './Create/CreateProject'
import './CSS/Home.css'
import {Grid} from '@mui/material'
import {Button, Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useState} from 'react'

const Home = ({clients, setClients}) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
   
      
    <div> 
      <Grid container> 
        <Grid item xs={3}>
        <SideBar clients={clients} setClients={setClients}/>
        </Grid>
          <header className='header'>Projects</header>
          <Grid item xs={3}>
          <div>
            <Button className="project-popup-button" onClick={handleClickOpen} startIcon={<AddCircleIcon />} size="large"></Button>
            <Dialog 
                open={open}
                keepMounted
                onClose={handleClose}>
              <DialogTitle>Create Project</DialogTitle>
              <DialogContent><CreateProject /></DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
              </DialogActions>
            </Dialog>
        </div>
          <div className='list-container'>
            
            <ProjectList />
            {/* <TaskList /> */}
            
          </div>
        </Grid>
    </Grid>
    </div>
    
  )
}

export default Home