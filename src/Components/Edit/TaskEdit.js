import React from 'react'
import { Button } from '@mui/material'
import { useState, useNavigate } from 'react'

const TaskEdit = ({task, setNewTask, newTask}) => {

  const [editTask, setEditTask] = useState(task)


  const handleEdit = (editor) => {
    fetch(`http://localhost:9292/tasks/${editor.id}`,{
      method: "PATCH",
      headers: { 
        "Accept": "application/json", 
        "Content-Type": "application/json"},
      body: JSON.stringify({
        description: editor.description,
        hours: editor.hours,
        pay: editor.pay
      })
    })
    .then((resp) => {console.log(resp)})
    console.log(JSON.stringify(editTask))

  }

  const updatingEdit = (changed) => {
    handleEdit(changed)

    const updatedTask = newTask.map((tasks) => 
      tasks.id === changed.id ? changed : tasks
    )

    setNewTask(updatedTask)
  }
  
  const handleChange = (e) => {setEditTask( {...task, [e.target.name]: e.target.value})}

  const handleSubmit = () => {
    updatingEdit(editTask)
  }

  return (
    <div className='edit-container'>
    <ul className='edit-list'>
        <li>Description: <input type={"text"} className="project-name" name="description" value={editTask.description} onChange={handleChange}></input></li>
        <li>Hours: <input type={"text"} className="project-client" name="hours" value={editTask.hours} onChange={handleChange}></input></li>
        <li>Pay: <input type={"number"} className="project-frame" name="pay" value={editTask.pay} onChange={handleChange}></input></li>
        <li>Due Date: <input></input></li>
        <Button className='project-button' onClick={handleSubmit}>Submit</Button>
    </ul>
</div>
  )
}

export default TaskEdit