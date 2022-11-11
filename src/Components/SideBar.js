import {useState, React} from 'react'
import "./CSS/SideBar.css"
import CreateClient from './Create/CreateClient'
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClientList from './lists/ClientList'

const SideBar = ({setClients, clients}) => {

    const [open, setOpen] = useState(false);
    const [hideClient, setHideClient] = useState(true)
    // console.log(clients)

    const handleClickOpen = () => {setOpen(true);};
    const handleClose = () => {setOpen(false);};
    const handleHide = () => {setHideClient((hideClient) => !hideClient)}
  
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

  return (
    <Box>
        <div className='sidebar'>
            <header>Clients</header>
            <Button 
                className="create-button"
                variant="contained" 
                onClick={handleClickOpen} 
                startIcon={<AddCircleIcon />}
                style={{margin: 20, marginLeft: 50, alignItems: "center", justifyContent: "center", paddingLeft: 10, background:" #1976D2"}}>
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
                <Accordion className="Accordion-side" style={{width: "100%", color: "#1976D2"}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>Client List</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ClientList clients={clients} setClients={setClients}/>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    </Box>
  )
}

export default SideBar