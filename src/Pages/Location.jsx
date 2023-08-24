import React from 'react';
import SideBar from '../Components/Sidebar';
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar';
import { GeoChart } from '../Charts/Geochart';
import LocationTable from './Location/LocationTable';
import Footer from '../Components/Footer';

const Location = () => {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{flexGrow: 1 , p:3}}>
    <Box height={40}/>
        <LocationTable/>
        <Box height={30}/>
    <GeoChart/>
    <Box height={30}/>
    
    </Box>
    </Box>
    <Footer/>
    </>
  )
}

export default Location