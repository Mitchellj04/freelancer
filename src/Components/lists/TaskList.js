import React, { useEffect, useState } from 'react'
import TaskContainer from '../Container/TaskContainer'
import CreateTask from '../Create/CreateTask'

const TaskList = ({list}) => {

  const [tasks, setTasks] = useState([])
  const [deleteTask, setTaskDelete] = useState([])
  
  // console.log(tasks)

  useEffect(() => {
    fetch('http://localhost:9292/tasks')
    .then (resp => resp.json())
    .then (task => {
        setTasks(task)
  }) }, [])

 

  const handleTaskDelete = (task) => {
    fetch(`http://localhost:9292/tasks/${task.id}`, {
        method: "DELETE"
    })
    .then((resp) => resp.json)
    deleteTasks(task)
  }

   const deleteTasks = (task) => {
    setTasks(tasks.filter((list) => list.id !== task.id))
  }


  const taskList = tasks.map((listTasks) => <TaskContainer id={listTasks.id} listTasks={listTasks} key={listTasks.id} handleTaskDelete={handleTaskDelete} list={list}/>)
  return (
    <>
      {taskList}
      
    </>
  )
}

export default TaskList