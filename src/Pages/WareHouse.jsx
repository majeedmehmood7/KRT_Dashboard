import React from 'react';
import Box from '@mui/material/Box';
import SideBar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Waretable from './Warehouse/Waretable';
import Footer from '../Components/Footer';
const WareHouse = () => {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{flexGrow: 1 , p:3}}>
    <Box height={30}/>
    <Waretable/>
    </Box>
    </Box>
    <Footer/>
    </>
  )
}

export default WareHouse