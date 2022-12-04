import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useState } from 'react'
import TaskEdit from '../Edit/TaskEdit'

const TaskContainer = ({
  handleTaskDelete, 
  task, 
  setNewTask,
  newTask
  }) => {


  const [hideEditTask, setHideEditTask] = useState(false)

  const handleTaskOpen = () => {setHideEditTask(true)}
  const handleTaskClose = () => {setHideEditTask(false)}
  
  return (
    <div>
        <div>
          <h4>Task: {task.description}</h4>
          <p>Time: {task.hours}</p>
          <p>pay: ${task.pay}</p>
          <p>Due Date: {task.due_date}</p>
                      
          <Button value="tasks" onClick={() => handleTaskDelete(task)} startIcon={<DeleteIcon/>} color="secondary" ></Button>
          <Button className='task-button-edit' onClick={handleTaskOpen}  startIcon={<EditIcon/>}></Button>
        </div>
      <Dialog
        open={hideEditTask}
        keepMounted
        onClose={handleTaskClose}
        maxWidth="lg">
          <DialogTitle>Edit Task</DialogTitle>

          <DialogContent>
            <TaskEdit task={task} setNewTask={setNewTask} newTask={newTask}/>
          </DialogContent>
          
          <DialogActions>
            <Button onClick={handleTaskClose}>Close</Button>
          </DialogActions>
      </Dialog>  
    </div>
  )
}

export default TaskContainer