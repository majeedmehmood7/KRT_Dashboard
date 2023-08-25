import React from 'react';
import SideBar from '../Components/Sidebar';
import Box from '@mui/material/Box';
import Navbar from '../Components/Navbar';
import Cards from '../Components/Cards';
import { PieChart } from '../Charts/Piechart';
import Grid from '@mui/material/Grid';
import { LineChart } from '../Charts/LineChart';
import Footer from '../Components/Footer';
import BarChart from '../Charts/Barchart';
import Speedometer from '../Components/Speedometer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex', }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3,  }}>
          <Cards />
          <Box height={30} />
          <Box height={30} />
          <Speedometer/>
          <Speedometer/>
          <BarChart/>
          {/* <Box height={30} />
          <h2>Pie Chart</h2>
          <PieChart/>
          <h2>Line Chart</h2>
          <LineChart/> */}

          <Grid container spacing={2}>
            <Grid item xs={5} md={5}>
              <PieChart />
            </Grid>

            <Grid item xs={5} md={5}>
              <LineChart />
              
            </Grid>
          </Grid>
         
        </Box>
      </Box>
      <Footer/>
    </>
  );
}

export default Home;
