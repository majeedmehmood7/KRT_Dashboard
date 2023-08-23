import React from 'react';
import SideBar from '../Components/Sidebar';
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar';
import Cards from '../Components/Cards';
import { Bar } from '../Charts/Barchart';
import { PieChart } from '../Charts/Piechart';
import Grid from '@mui/material/Grid';
import { LineChart } from '../Charts/LineChart';


const Home = () => {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <SideBar/>
    <Box component="main" sx={{flexGrow: 1 , p:3}}>
    <Cards/>
    <Bar/>

    <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <PieChart/>
        </Grid>

        <Grid item xs={6} md={8}>
          <LineChart/>
        </Grid>


      </Grid>
    </Box>
    </Box>
    </>
  )
}

export default Home