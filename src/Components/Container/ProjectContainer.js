import React from 'react'

const ProjectContainer = ({list}) => {
    console.log(list)
  return (
    <div>
        <h1>Project: {list.name}</h1>
        <h3>Client: {list.client.name}</h3>
        <h3>To Complete:</h3>
        <h4>Task: {list.task.description}</h4>
        <p>Time: {list.task.hours}</p>
        <p>pay: ${list.task.pay}</p>
        <p>Due Date: {list.task.due_date}</p>
        <p>Project Timeframe: {list.timeframe} months</p>
    </div>
  )
}

export default ProjectContainer