import React, { useState, useEffect } from 'react'
import ClientContainer from '../Container/ClientContainer'

const ClientList = ({projects, setProjects, list }) => {

  // console.log(projects)
  const [clients, setClients] = useState([list.client])
  // console.log(clients)


  const removeClient = (client) => {setClients(clients.filter((list) => list.id !== client.id))}

  const handleDelete = (client) => {
    fetch(`http://localhost:9292/projects/${client.id}`, {
        method: "DELETE"
    })
    .then((resp) => resp.json)
    removeClient(client)
    console.log(client.id)
  }   

  let tasksLength = list.tasks.length 
  // const clientList = projects.map((list) => <ClientContainer list={list} key={list.id} handleDelete={handleDelete}/>)   
  function clientSideBar(){
    if (list.client_id === null){
      console.log('Annonymous')
    }
    else {
      return clients.map((list) => <ClientContainer list={list} key={list.id} handleDelete={handleDelete} tasksLength={tasksLength}/>)
    }
  }

  
  
  
  
    
  return (
    <>
    {clientSideBar()}
    {/* {clientList} */}
    </>
  )
}

export default ClientList