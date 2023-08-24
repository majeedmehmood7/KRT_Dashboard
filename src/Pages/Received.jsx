import React from 'react';
import Box from '@mui/material/Box';
import SideBar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Receivedtable from './Received/Receivedtable';
import Footer from '../Components/Footer';

const Received = () => {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{flexGrow: 1 , p:3}}>
    <Box height={30}/>
    <Receivedtable/>
    </Box>
    </Box>
    <Footer/>
    </>
  )
}

export default Received