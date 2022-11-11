import React from 'react'
import { Button } from '@mui/material'
import { useState, useNavigate } from 'react'

const TaskEdit = ({listTasks}) => {

  const [editTask, setEditTask] = useState(listTasks)


  const handleEdit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:9292/tasks/${listTasks.id}`,{
      method: "PATCH",
      headers: { 
        "Accept": "application/json", 
        "Content-Type": "application/json"},
      body: JSON.stringify(editTask)
    })
    .then((resp) => {console.log(resp)})
    console.log(JSON.stringify(editTask))
  }

  const handleChange = (e) => {setEditTask( {...editTask, [e.target.name]: e.target.value})}


  return (
    <div className='edit-container'>
    <ul className='edit-list'>
        <li>Description: <input type={"text"} className="project-name" name="description" value={editTask.description} onChange={handleChange}></input></li>
        <li>Hours: <input type={"text"} className="project-client" name="hours" value={editTask.hours} onChange={handleChange}></input></li>
        <li>Pay: <input type={"number"} className="project-frame" name="pay" value={editTask.pay} onChange={handleChange}></input></li>
        <li>Due Date: <input></input></li>
        <Button className='project-button'>Submit</Button>
    </ul>
</div>
  )
}

export default TaskEdit