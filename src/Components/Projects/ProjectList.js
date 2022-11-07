import React from 'react'
import {useEffect, useState} from 'react'
import ProjectContainer from '../Container/ProjectContainer'
import '../CSS/ProjectList.css'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const ProjectList = () => {
   
    const [projects, setProjects] = useState([])
    const [deleteTask, setTaskDelete] = useState([])

    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(10),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    

  useEffect(() => {
      fetch ('http://localhost:9292/projects')
      .then (resp => resp.json())
      .then (project => {
          setProjects(project)
      })
  }, [])

  function deleteItem(destroy){
      const updatedItem = projects.filter((list) => list.id !== destroy.id);
      setProjects(updatedItem)
    }

    function deleteTasks(destroy){
      const updatedTask= projects.filter((list) => list.task.id !== destroy.id);
      setTaskDelete(updatedTask)
    }

 
  console.log(projects)

  const projectList = projects.map((list) => <ProjectContainer className={list.id} list={list} key={list.id} deleteItem={deleteItem} deleteTasks={deleteTasks}/> )

  return (


          <div className='list-container'>
            {projectList}
          </div>   

  )
}

export default ProjectList