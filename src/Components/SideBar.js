import React from 'react'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import "./CSS/SideBar.css"
import CreateClient from './Create/CreateClient'
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const SideBar = ({setClients, clients}) => {

    const [open, setOpen] = useState(false);
    const [hideClient, setHideClient] = useState(true)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    // console.log(clients)
    const handleHide = () => {
        setHideClient((hideClient) => !hideClient)
    }
  
    const clientList = clients.map((list) => {
        let tasksLenght = list.tasks.length
        return (
            <div key={list.id} className="client-container">
                <h3>{list.name}</h3>
                <p>{list.manager}</p>
                <p>{list.contact}</p>
                <p>To Do: {tasksLenght}</p>
            </div>
        )
    })   

    function clientHider(){
        if(hideClient === false){
            return clientList
        }
        else{
            return 
        }
    }

  return (
    <div className='sidebar'>
        <header>Clients</header>
        <Button 
            className="create-button"
            variant="contained" 
            onClick={handleClickOpen} 
            startIcon={<AddCircleIcon />}>
            Create</Button>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}>
                <DialogTitle>Create Client</DialogTitle>
                <DialogContent><CreateClient /></DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        <div className="container-sidebar">
           <Button variant="outlined" onClick={handleHide} startIcon={<KeyboardArrowDownIcon />}>Client List</Button>
           {clientHider()}
        </div>

    </div>
  )
}

export default SideBar