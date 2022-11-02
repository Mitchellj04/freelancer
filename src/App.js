import React from "react";
import {useEffect, useState} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home"
import ProjectList from "./Components/Projects/ProjectList";
import CreateTask from "./Components/Container/CreateTask";
import CreateProject from "./Components/Container/CreateProject";

function App() {



  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/projects" element={<ProjectList />}></Route>
          <Route path="/create-task" element={<CreateTask />}></Route>
          <Route path="/create-project" element={<CreateProject />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
