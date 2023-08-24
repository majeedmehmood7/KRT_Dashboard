import React from 'react';
import Box from '@mui/material/Box';
import SideBar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import './About.css';
import Logo from '../Assets/logo.png';
import Footer from '../Components/Footer';
const About = () => {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h2 className='heading'>About Us</h2>
          <img src={Logo}/>
          <p className='main'>
            Karachi Relief Trust is Disaster Management Voluntary Organization originally established to provide relief to the people afflicted in the provinces of Balochistan and Sindh by Cyclone Yemyin in 2007. This group of civic minded volunteers came together with the fundamental belief that each of us can and should make a difference. KRT volunteers quickly organized donation drives, emergency ration preparation efforts, transportation of relief goods and were active participants in rebuilding homes in the affected areas.

            In 2008, Karachi Relief mobilized its team again to help the victims of the Quetta Earthquake and avoid a wide-spread humanitarian crises by taking the initiatives to build shelters for the displaced. Additionally food rations were contributed among the affectees. Continuing its efforts in 2009, the internally displaced people of Swabi had no means to survive with. KRT saw the need to provide relief for certain perishable daily necessities such as milk.

            2010 saw one of Pakistan’s worst floods to hit the nation. KRT extended its support to more than 22,000 flood affected people by setting up camps and providing relief. Once the flood waters receded, KRT’s team surveyed various villages in Khyber-Puthkthoonkhwa, lower Punjab and Sindh and began work on its Rural Rehabilitation Program. This elaborate program, through the generous support of donors and KRT partners, saw the reconstruction of houses, development of village infrastructure and restoration of normalcy to their lives. The program faced several challenges, such as the massive floods of 2011 which again hit Sindh, and yet KRT took on the challenge and saw through its commitment of rehabilitating the flood destroyed villages.

            Our efforts continue to assist the victims of natural disasters and our cause remains to support them in their hour of need. Today, KRT is reaching out to support the Balochistan Earthquake victims and helping them coupe with and survive this devastation.
          </p>
        </Box>
      </Box>
      <Footer/>
    </>

  )
}

export default About