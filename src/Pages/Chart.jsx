import React from 'react';
import SideBar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';
import { PieChart } from '../Charts/Piechart';
import { GeoChart } from '../Charts/Geochart';
import Footer from '../Components/Footer';
import { LineChart } from '../Charts/LineChart';

const Chart = () => {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{flexGrow: 1 , p:3}}>
    <PieChart/>
    <GeoChart/>
    <LineChart/>
    </Box>
    </Box>
    <Footer/>
    </>
  )
}

export default Chart