import React from 'react'
import { Button } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProjectEdit = ({list, projects, setProjects}) => {
  const navigate = useNavigate()
  const [editProject, setEditProject] = useState(list)


  // console.log(editProject)


  const handleEdit = (editor) => {
    fetch(`http://localhost:9292/projects/${editor.id}`,{
      method: "PATCH",
      headers: { 
        "Accept": "application/json", 
        "Content-Type": "application/json"},
      body: JSON.stringify({
        name: editor.name,
        timeframe: editor.timeframe,
        category: editor.category
      })
    })
    .then((resp) => {console.log(resp)})
    console.log(JSON.stringify(editProject))
  }

  const updatingProject = (changed) => {
    handleEdit(changed)

    const updatedProjects = projects.map((project) => 
      project.id === changed.id ? changed : project 
    )

    setProjects(updatedProjects)
  }

  const handleChange = (e) => {setEditProject( {...list, [e.target.name]: e.target.value})}

  const handleSubmit = () => {
    updatingProject(editProject)
  }

  return (
    <div className='edit-container'>
    <form>
    <ul className='edit-list'>
        <li>Project Name: <input type={"text"} className="project-name" name='name' value={editProject.name} onChange={handleChange}></input></li>
        {/* <li>Client: <input type={"text"} className="project-client" value={editProject.client.name} name="client" onChange={handleChange}></input></li> */}
        <li>TimeFrame: <input type={"number"} className="project-frame" value={editProject.timeframe} name="timeframe" onChange={handleChange}></input></li>
        <li>Category: <input type={"text"} className="project-frame" value={editProject.category} name="category" onChange={handleChange}></input></li>
        <Button className='project-button' onClick={handleSubmit}>Submit</Button>
    </ul>
    </form>
</div>
  )
}

export default ProjectEdit