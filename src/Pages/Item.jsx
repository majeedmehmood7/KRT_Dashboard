import React from 'react';
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar';
import SideBar from '../Components/Sidebar';

const Item = () => {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{flexGrow: 1 , p:3}}>
    <h2>Items</h2>
    </Box>
    </Box>
    </>
  )
}

export default Item