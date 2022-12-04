import DeleteIcon from '@mui/icons-material/Delete'
import { Button, List } from '@mui/material'
import React from 'react'

const ClientContainer = ({list, handleDelete, tasksLength}) => {

    // 
    // console.log(list)

    // function clients() {
    //   if (list)
    // }

  return (
    <div className='client-container'>
        <h3>{list.name}</h3>
        <p>{list.manager}</p>
        <p>{list.contact}</p>
        <p>To Do: {tasksLength}</p>
        <Button size={"small"} startIcon={<DeleteIcon/>} onClick={() => handleDelete(list)}/>
    </div>
  )
}

export default ClientContainer