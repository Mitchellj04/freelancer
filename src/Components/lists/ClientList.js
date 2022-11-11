import React, { useEffect } from 'react'
import ClientContainer from '../Container/ClientContainer'

const ClientList = ({clients, setClients}) => {

  const removeBook = (client) => {setClients(clients.filter((list) => list.id !== client.id))}

  const handleDelete = (client) => {
    fetch(`http://localhost:9292/projects/${client.id}`, {
        method: "DELETE"
    })
    .then((resp) => resp.json)
    removeBook(client)
    console.log(client.id)
  }    
  
  const clientList = clients.map((list) => <ClientContainer list={list} key={list.id} handleDelete={handleDelete}/>)   
    
    
  return (
    <>
    {clientList}
    </>
  )
}

export default ClientList