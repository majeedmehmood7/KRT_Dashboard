import React from 'react';
import SideBar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';

const House = () => {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{flexGrow: 1 , p:3}}>
    <h2>House</h2>
    </Box>
    </Box>
    </>
  )
}

export default House