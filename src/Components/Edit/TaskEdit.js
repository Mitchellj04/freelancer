import React from 'react'
import { Button } from '@mui/material'

const TaskEdit = () => {


  return (
    <div className='edit-container'>
    <ul className='edit-list'>
        <li>Description: <input type={"text"} className="project-name"></input></li>
        <li>Time: <input type={"text"} className="project-client"></input></li>
        <li>Pay: <input type={"number"} className="project-frame"></input></li>
        <li>Due Date: <input></input></li>
        <Button className='project-button'>Submit</Button>
    </ul>
</div>
  )
}

export default TaskEdit