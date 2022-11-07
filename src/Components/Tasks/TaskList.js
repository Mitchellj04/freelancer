import React, { useEffect, useState } from 'react'
import TaskContainer from '../Container/TaskContainer'

const TaskList = () => {

  const [tasks, setTasks] = useState([])
  

  useEffect(() => {
    fetch('http://localhost:9292/tasks')
    .then (resp => resp.json())
    .then (task => {
        setTasks(task)
  }) }, [])

 
  console.log(tasks)

  const taskList = tasks.map((listTasks) => <TaskContainer listTasks={listTasks} key={listTasks.id}/>)

  console.log(taskList)
  return (
    <div>
    </div>
  )
}

export default TaskList