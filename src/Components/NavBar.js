import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {



  return (
    <div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create-project">Create Project</Link></li>
        <li><Link to="/create-task">Client Contact</Link></li>
    </div>
  )
}

export default NavBar