import React from "react";
import {useEffect, useState} from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './Components/CSS/App.css';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home"
import ProjectList from "./Components/lists/ProjectList";
import CreateTask from "./Components/Create/CreateTask";
import CreateProject from "./Components/Create/CreateProject";
import CreateClient from "./Components/Create/CreateClient";
import TaskList from "./Components/lists/TaskList";

function App() {

  const [clients, setClients] = useState([])
  const [projects, setProjects] = useState([])
  

  useEffect(() => {
    fetch ('http://localhost:9292/clients')
    .then (resp => resp.json())
    .then (project => {
        setClients(project)
    })
  }, [])

  useEffect(() => {
    getProjects()
  }, [])

  const getProjects =() => {
    fetch ('http://localhost:9292/projects')
    .then (resp => resp.json())
    .then (project => {
        setProjects(project)
    })
  }

// console.log(projects)

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home setClients={setClients} clients={clients} projects={projects} setProjects={setProjects} />}></Route>
          <Route path="/projects" element={<ProjectList projects={projects}/>}></Route>
          <Route path="/create-task" element={<CreateTask projects={projects}/>}></Route>
          <Route path="/create-project" element={<CreateProject clients={clients}/>}></Route>
          <Route path="/create-client" element={<CreateClient />}></Route>
          <Route path="/task-container" element={<TaskList />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
