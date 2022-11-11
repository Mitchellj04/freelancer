import  { React, useEffect, useState } from 'react'
import './CSS/NavBar.css'
import { AppBar, Toolbar, Typography } from '@mui/material'

const NavBar = () => {
  
  return (
    
    <div className='navbar'>
      <AppBar style={{textAlign: "center", alignItems: "center"}}>
        <Toolbar>
        <Typography variant='h4'>Freelancer</Typography>
        </Toolbar>
      </AppBar>
    </div>
   
  )
}

export default NavBar