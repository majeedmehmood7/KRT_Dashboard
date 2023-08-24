import React from 'react';
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar';
import SideBar from '../Components/Sidebar';
import { Bar } from '../Charts/Barchart';
import Tableissue from './Issue/Tableissue';
import Footer from '../Components/Footer';
const Issue = () => {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{flexGrow: 1 , p:3}}>
    <Box height={30}/>
    <Tableissue/>
    </Box>
    </Box>
    <Footer/>
    </>
  )
}

export default Issue