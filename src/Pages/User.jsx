import React from 'react';
import Box from '@mui/material/Box';
import SideBar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Usertable from './Users/Usertable';
import Footer from '../Components/Footer';

const User = () => {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{flexGrow: 1 , p:3}}>
    <Box height={30}/>
      <Usertable/>
    </Box>
    </Box>
    <Box height={220}/>
    <Footer/>
    </>
  )
}

export default User