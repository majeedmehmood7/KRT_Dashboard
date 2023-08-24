import React from 'react'
import SideBar from '../Components/Sidebar';
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Setting = () => {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{flexGrow: 1 , p:3}}>
    <h2>Setting</h2>
    </Box>
    </Box>
    <Footer/>
    </>
  )
}

export default Setting