import React from 'react';
import Box from '@mui/material/Box';
import SideBar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Vendortable from './Vendor/Vendortable';
import Footer from '../Components/Footer';

const Vendor = () => {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{flexGrow: 1 , p:3}}>
    <Box height={30}/>
    <Vendortable/>
    </Box>
    </Box>
    <Footer/>
    </>
  )
}

export default Vendor