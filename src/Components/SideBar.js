import React from 'react'
import {useEffect, useState} from 'react'

const SideBar = ({setClients, clients}) => {

    

  
    console.log(clients)
  
    const clientList = clients.map((list) => {
        let tasksLenght = list.tasks.length
        return (
            <div key={list.id}>
                <h1>Client</h1>
                <h3>{list.name}</h3>
                <p>{list.manager}</p>
                <p>{list.contact}</p>
                <p>To Do: {tasksLenght}</p>
            </div>
        )
    })   

  return (
    <div>
        {clientList}
    </div>
  )
}

export default SideBar