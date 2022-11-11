import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useState } from 'react'
import TaskEdit from '../Edit/TaskEdit'

const TaskContainer = ({
  listTasks, 
  handleTaskDelete, 
  list}) => {

  const [hideEditTask, setHideEditTask] = useState(false)

  const handleTaskOpen = () => {setHideEditTask(true)}
  const handleTaskClose = () => {setHideEditTask(false)}

  function taskFilter(){
    if(listTasks.project.id === list.id){
      return  <div>
      <h4>Task: {listTasks.description}</h4>
      <p>Time: {listTasks.hours}</p>
      <p>pay: ${listTasks.pay}</p>
      <p>Due Date: {listTasks.due_date}</p>
              
      <Button value="tasks" onClick={() => handleTaskDelete(listTasks)} startIcon={<DeleteIcon/>} color="secondary" ></Button>
      <Button className='task-button-edit' onClick={handleTaskOpen}  startIcon={<EditIcon/>}></Button>
  </div>
    }
    else{
      // console.log("cannot post this task")
    }
  }
  
  return (
    <div>
      { taskFilter()}
      <Dialog
        open={hideEditTask}
        keepMounted
        onClose={handleTaskClose}
        maxWidth="lg">
          <DialogTitle>Edit Task</DialogTitle>

          <DialogContent>
            <TaskEdit listTasks={listTasks}/>
          </DialogContent>
          
          <DialogActions>
            <Button onClick={handleTaskClose}>Close</Button>
          </DialogActions>
      </Dialog>  
    </div>
  )
}

export default TaskContainer