import React from 'react';
import SideBar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';
import HouseTable from './House/HouseTable';
import Footer from '../Components/Footer';

const House = () => {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{flexGrow: 1 , p:3}}>
    <Box height={30}/>
    <HouseTable/>
    </Box>
    </Box>
    <Footer/>
    </>
  )
}

export default House