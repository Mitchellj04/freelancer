import React from 'react'

const TaskContainer = ({listTasks}) => {

  


  return (
    <div>
        <h4>Task: {listTasks.description}</h4>
        <p>Time: {listTasks.hours}</p>
        <p>pay: ${listTasks.pay}</p>
        <p>Due Date: {listTasks.due_date}</p>
    </div>
  )
}

export default TaskContainer