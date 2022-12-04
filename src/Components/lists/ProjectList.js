import React from 'react'
import {useEffect, useState} from 'react'
import ProjectContainer from '../Container/ProjectContainer'
import '../CSS/ProjectList.css'


const ProjectList = ({projects, setProjects}) => {

  //patch 
  

  //Delete Projects 
  const handleDelete = (project) => {
    fetch(`http://localhost:9292/projects/${project.id}`, {
        method: "DELETE"
    })
    .then((resp) => resp.json)
    removeBook(project)
    console.log(project.id)
  }    
  const removeBook = (project) => {
    setProjects(projects.filter((list) => list.id !== project.id))
  }

 
  console.log(projects)

  const projectList = projects.map((list) => <ProjectContainer list={list} key={list.id} projects={projects} setProjects={setProjects} handleDelete={handleDelete}/> )

  return (
    <>
      {projectList}
    </>   

  )
}

export default ProjectList