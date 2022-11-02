import React, { useEffect, useState } from 'react'

const NavBar = () => {

    const [clients, setClients] = useState([])

    useEffect(() => {
        fetch ('http://localhost:9292/clients')
        .then (resp => resp.json())
        .then (project => {
            setClients(project)
        })
    }, [])
  
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

export default NavBar