import React from 'react';
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar';
import SideBar from '../Components/Sidebar';
import { Bar } from '../Charts/Barchart';
const Issue = () => {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{flexGrow: 1 , p:3}}>
    <h2>Issue Inventory</h2>
    <Bar/>
    </Box>
    </Box>
    </>
  )
}

export default Issue