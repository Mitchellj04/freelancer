import React, { useEffect, useState } from 'react'
import '../CSS/ProjectContainer.css'
import ProjectEdit from '../Edit/ProjectEdit';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Dialog, DialogActions, DialogContent, DialogTitle, Accordion, AccordionActions, AccordionSummary, Typography, AccordionDetails} from '@mui/material';
import { Container } from '@mui/system';
import { Navigate, useNavigate } from 'react-router-dom';
import TaskContainer from './TaskContainer';

const ProjectContainer = ({
    list, 
    projects,
    setProjects,
    handleDelete
     }) => {

    const navigate = useNavigate()
    const [hideEdit, setHideEdit] = useState(false)
    const [newTask, setNewTask] = useState(list.tasks)

    // console.log(newTask)

    // STYLER 
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));    
      
      //TASK DELETE 
      const handleTaskDelete = (task) => {
            fetch(`http://localhost:9292/tasks/${task.id}`, {
                method: "DELETE"
            })
            .then((resp) => resp.json)
            deleteTasks(task)
          }
           const deleteTasks = (task) => {
            setNewTask(newTask.filter((list) => list.id !== task.id))
          }

    //OPEN DIALOG 
    const handleClickOpen = () => {setHideEdit(true);};
    const handleClose = () => {setHideEdit(false);};
    
    // MAP TASKS TO EACH PROJECT 
    function mapped() {
        const mapper = newTask.map((task) => <TaskContainer task={task} setNewTask={setNewTask} newTask={newTask} key={task.id} handleTaskDelete={handleTaskDelete}/>)
        if(newTask.legnth > 0){
            console.log("Length is longer than 0")
           return {mapper}
        }
        else{
            console.log(newTask.length)
            return <p>Please add some tasks to complete</p>
        }
    }

    function taskLength(){
        if(newTask.length > 0){
            return  newTask.map((task) => <TaskContainer task={task} setNewTask={setNewTask} newTask={newTask} key={task.id} handleTaskDelete={handleTaskDelete}/>)
        }
        else{
            return <p>Please add some tasks to complete.</p>
        }
    }
    
    // const mapper = newTask.map((task) => <TaskContainer task={task} setNewTask={setNewTask} newTask={newTask} key={task.id} handleTaskDelete={handleTaskDelete}/>)


  return (
    
    <Box>
        <Grid container        
                direction="row"
                justify="center"
                alignItems="stretch" 
                //style={{margin: 10, boxShadow:" 5px 5px 5px 5px pink"}}
                >
            <Box style={{width: 650, margin: 10, boxShadow:" 5px 5px 5px 5px grey"}}
            >
                <Grid item xs={12}>
                    <Item>
                        <div className={"project-container"}>
                            <h1>Project: {list.name}</h1>
                            {/* <h3>Client: {list.client.name}</h3> */}
                            <p>Project Timeframe: {list.timeframe} months</p> 
                            <p>category: {list.category}</p>    
                            <Button 
                                size="small" 
                                variant="contained" 
                                startIcon={<EditIcon/>} 
                                className="create-button"
                                onClick={handleClickOpen}></Button> 
                            <Button 
                                size="small" 
                                variant="contained" 
                                startIcon={<DeleteIcon />}  
                                value="projects"
                                color="secondary" 
                                onClick={() => handleDelete(list)}></Button>
                            <Dialog
                                open={hideEdit}
                                keepMounted
                                onClose={handleClose}>
                                <DialogTitle>Edit Project</DialogTitle>
                                <DialogContent><ProjectEdit list={list} projects={projects} setProjects={setProjects}/></DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Close</Button>
                                </DialogActions>
                            </Dialog>

                            <Accordion className="Accordion-side" style={{width: "100%", color: "#1976D2"}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography>Task List</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        {taskLength()}
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                                
                            </div>
                        </Item> 
                    </Grid>
                </Box>
             </Grid>
       </Box>
   
  )
}

export default ProjectContainer