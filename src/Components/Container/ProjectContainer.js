import React, { useEffect, useState } from 'react'
import '../CSS/ProjectContainer.css'
import ProjectEdit from '../Edit/ProjectEdit';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Dialog, DialogActions, DialogContent, DialogTitle, Accordion, AccordionActions, AccordionSummary, Typography, AccordionDetails} from '@mui/material';
import { Container } from '@mui/system';
import TaskList from '../lists/TaskList';
import { Navigate, useNavigate } from 'react-router-dom';

const ProjectContainer = ({
    list, 
    projects,
    setProjects,
    handleDelete
     }) => {

    // console.log(list)
    const navigate = useNavigate()
    const [hideEdit, setHideEdit] = useState(false)

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    const handleClickOpen = () => {setHideEdit(true);};
    const handleClose = () => {setHideEdit(false);};



  return (
    
    <Box>
        <Grid container        
                direction="row"
                justify="center"
                alignItems="stretch" 
                style={{margin: 10, boxShadow:" 5px 5px 5px 5px pink"}}>
            <Box style={{margin: 10, boxShadow:" 5px 5px 5px 5px red"}}>
                <Grid item xs={12}>
                    <Item>
                        <div className={"project-container"}>
                            <h1>Project: {list.name}</h1>
                            {/* <h3>Client: {list.client.name}</h3> */}
                            <p>Project Timeframe: {list.timeframe} months</p> 
                            <p>category: {list.category}</p>    
                            <Button 
                                size="small" 
                                variant="contained" 
                                startIcon={<EditIcon/>} 
                                className="create-button"
                                onClick={handleClickOpen}></Button> 
                            <Button 
                                size="small" 
                                variant="contained" 
                                startIcon={<DeleteIcon />}  
                                value="projects"
                                color="secondary" 
                                onClick={() => handleDelete(list)}></Button>
                            <Dialog
                                open={hideEdit}
                                keepMounted
                                onClose={handleClose}>
                                <DialogTitle>Edit Project</DialogTitle>
                                <DialogContent><ProjectEdit list={list} projects={projects} setProjects={setProjects}/></DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Close</Button>
                                </DialogActions>
                            </Dialog>

                            <Accordion className="Accordion-side" style={{width: "100%", color: "#1976D2"}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <Typography>Task List</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div>
                                        <TaskList list={list} setList={setProjects}/>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                                
                            </div>
                        </Item> 
                    </Grid>
                </Box>
             </Grid>
       </Box>
   
  )
}

export default ProjectContainer