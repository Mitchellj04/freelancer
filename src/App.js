import React from "react";
import {useEffect, useState} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home"
import ProjectList from "./Components/Projects/ProjectList";
import CreateTask from "./Components/Create/CreateTask";
import CreateProject from "./Components/Create/CreateProject";
import CreateClient from "./Components/Create/CreateClient";

function App() {

  const [clients, setClients] = useState([])

  useEffect(() => {
    fetch ('http://localhost:9292/clients')
    .then (resp => resp.json())
    .then (project => {
        setClients(project)
    })
}, [])



  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home setClients={setClients} clients={clients}/>}></Route>
          <Route path="/projects" element={<ProjectList />}></Route>
          <Route path="/create-task" element={<CreateTask />}></Route>
          <Route path="/create-project" element={<CreateProject clients={clients}/>}></Route>
          <Route path="/create-client" element={<CreateClient />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
