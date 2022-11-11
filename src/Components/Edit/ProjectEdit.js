import React from 'react'
import { Button } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProjectEdit = ({list, projects}) => {
  const navigate = useNavigate()
  const [editProject, setEditProject] = useState(list)


  console.log(editProject)


  const handleEdit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:9292/projects/${list.id}`,{
      method: "PATCH",
      headers: { 
        "Accept": "application/json", 
        "Content-Type": "application/json"},
      body: JSON.stringify({
        name: list.name,
        timeframe: list.timeframe,
        category: list.category
      })
    })
    .then((resp) => {console.log(resp)})
    navigate("/");
    console.log(JSON.stringify(editProject))
  }

  const handleChange = (e) => {setEditProject( {...list, [e.target.name]: e.target.value})}

  return (
    <div className='edit-container'>
    <form>
    <ul className='edit-list'>
        <li>Project Name: <input type={"text"} className="project-name" name='name' value={editProject.name} onChange={handleChange}></input></li>
        {/* <li>Client: <input type={"text"} className="project-client" value={editProject.client.name} name="client" onChange={handleChange}></input></li> */}
        <li>TimeFrame: <input type={"number"} className="project-frame" value={editProject.timeframe} name="timeframe" onChange={handleChange}></input></li>
        <Button className='project-button' onClick={handleEdit}>Submit</Button>
    </ul>
    </form>
</div>
  )
}

export default ProjectEdit