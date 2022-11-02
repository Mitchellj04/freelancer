import React from 'react'
import ProjectList from './Projects/ProjectList'
import SideBar from './SideBar'

const Home = ({clients, setClients}) => {
  return (
    <div>
        <SideBar clients={clients} setClients={setClients}/>
        <ProjectList />
    </div>
  )
}

export default Home