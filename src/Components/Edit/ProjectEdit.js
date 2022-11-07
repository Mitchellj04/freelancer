import React from 'react'
import { Button } from '@mui/material'

const ProjectEdit = () => {
  return (
    <div className='edit-container'>
    <ul className='edit-list'>
        <li>Project Name: <input type={"text"} className="project-name"></input></li>
        <li>Client: <input type={"text"} className="project-client"></input></li>
        <li>TimeFrame: <input type={"number"} className="project-frame"></input></li>
        <Button className='project-button'>Submit</Button>
    </ul>
</div>
  )
}

export default ProjectEdit