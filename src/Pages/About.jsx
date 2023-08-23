import React from 'react';
import Box from '@mui/material/Box';
import SideBar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

const About = () => {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{flexGrow: 1 , p:3}}>
    <h2>About</h2>
    </Box>
    </Box>
    </>
    
  )
}

export default About