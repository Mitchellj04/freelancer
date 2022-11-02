import React from 'react'
import {useEffect, useState} from 'react'
import ProjectContainer from '../Container/ProjectContainer'

const ProjectList = () => {
   
    const [projects, setProjects] = useState([])

useEffect(() => {
    fetch ('http://localhost:9292/projects')
    .then (resp => resp.json())
    .then (project => {
        setProjects(project)
    })
}, [])

const projectList = projects.map((list) => <ProjectContainer list={list} key={list.id}/> )

  return (
    <div>{projectList}</div>
  )
}

export default ProjectList