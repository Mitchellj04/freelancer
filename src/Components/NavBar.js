import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './CSS/NavBar.css'

const NavBar = () => {



  return (
    <div className='navbar'>
      <div className='navcenter'>
        <ul className='navlist'>
          <h1 className='list-item'>Freelancer</h1>
          <li className='list-item'><Link className="link" to="/">Home</Link></li>
          <li className='list-item'><Link className="link" to="/create-project">Create Project</Link></li>
        </ul> 
     </div>

    </div>
  )
}

export default NavBar