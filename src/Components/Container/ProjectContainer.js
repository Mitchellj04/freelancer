import React, { useEffect, useState } from 'react'
import '../CSS/ProjectContainer.css'
import ProjectEdit from '../Edit/ProjectEdit';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import TaskEdit from '../Edit/TaskEdit';

const ProjectContainer = ({list, deleteItem, deleteTasks}) => {
    
    const [hideEdit, setHideEdit] = useState(false)
    const [hideTask, setHideTask] = useState(true)
    const [hideEditTask, setHideEditTask] = useState(true)

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    

    const handleDelete = (e) => {
        fetch(`http://localhost:9292/projects/${list.id}`, {
            method: "DELETE"
        })
        .then((resp) => resp.json)
        .then((destroy) => deleteItem(destroy) )
            
    }

    const handleClickOpen = () => {
        setHideEdit(true);
      };
    
      const handleClose = () => {
        setHideEdit(false);
      };

    const handleTaskOpen = () => {
        setHideEditTask(true)
    }

    const handleTaskClose = () => {
        setHideEditTask(false)
    }

    const handleHide = () => {
        setHideEdit((hideEdit) => !hideEdit)
    }

    const handleHideTask = () => {
        setHideTask((hideTask) => !hideTask)
    }

    const handleTaskEdit = () => {
        setHideEditTask((hideEditTask) => !hideEditTask)
    }

    const handleTaskDelete = () => {
        fetch(`http://localhost:9292/tasks/${list.id}`, {
            method: "DELETE"
        })
        .then((resp) => resp.json)
        .then((destroy) => deleteTasks(destroy))
    }

    function taskDiv(){
        if(list.task_id === list.task.id){
            return (
            <div className='task-container'>
                <h4>Task:</h4>
                <p>Description: {list.task.description}</p>
                <p>Time: {list.task.hours}</p>
                <p>pay: ${list.task.pay}</p>
                <p>Due Date: {list.task.due_date}</p>
                <Button onClick={handleTaskDelete} startIcon={<DeleteIcon/>} color="secondary"></Button>
                <Button className='task-button-edit' onClick={handleTaskOpen}  startIcon={<EditIcon/>}></Button>
                <Dialog
                    open={hideEditTask}
                    keepMounted
                    onClose={handleTaskClose}>
                    <DialogTitle>Edit Project</DialogTitle>
                    <DialogContent><TaskEdit /></DialogContent>
                    <DialogActions>
                    <Button onClick={handleTaskClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )}
        else if (list.id.task === undefined){
            list.task.id = null
        }
    }

    function hideTaskDiv(){
        if(hideTask === false){
            return taskDiv()
        }
        else{
            return 
        }
    }

    console.log(hideTask)

  return (
    <Box>
        <Grid container spacing={4}>
            <Grid xs={9} sm={12}>
                <Item>
                <div className={"project-container"}>
                
                    <h1>Project: {list.name}</h1>
                    <h3>Client: {list.client.name}</h3>
                    <p>Project Timeframe: {list.timeframe} months</p>     
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
                        color="secondary" 
                        onClick={handleDelete}></Button>
                        <Dialog
                            open={hideEdit}
                            keepMounted
                            onClose={handleClose}>
                            <DialogTitle>Edit Project</DialogTitle>
                            <DialogContent><ProjectEdit/></DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Close</Button>
                            </DialogActions>
                        </Dialog>
                    <h3>To Complete: <button onClick={handleHideTask}>...</button></h3>
                    {hideTaskDiv()}
                </div>
                </Item>
                </Grid>
        </Grid>
    </Box>
  )
}

export default ProjectContainer