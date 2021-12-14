

import { typography } from '@mui/system';
import React from 'react'
import ReactDOM from 'react-dom'
import GradientHeader from '../components/gradient-headline'
import Image from 'next/image';


import { styled, alpha, createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { AppBar, Toolbar, Box, Typography, Grid, Paper, IconButton, Button, TextField } from '@mui/material';
import adtcpic from '../public/two-combined.png'

const theme = createTheme({
    typography: {
        fontFamily: [
            'Poppins'
        ].join(','),
        h1: {
            fontWeight: 800,
            fontSize: 64,
        },
        h2: {
            fontWeight: 800,
            fontSize: 48,
        },
        h3: {
            fontWeight: 700,
            fontSize: 28,
        },
        h4: {
          fontWeight: 500,
          fontSize: 24,
        },
        h5_bold: {
            fontWeight: 500,
            fontSize: 18,
        },
        h5: {
            fontWeight: 400,
            fontSize: 18,
        }
    },
  });
  

export default function aboutus(){
    return(
        <ThemeProvider theme={theme}>
    <Box sx = {{marginLeft: 2, padding: 5}}>
    <Box>
              <div><Image src= "/two-combined.png" alt="addutocart" width={500} height={500} layout="intrinsic"/></div>
          </Box>
         <Box marginLeft={100}>
          <GradientHeader variant="h2" text="AdDU to Cart"/>
         
         <Typography>A business website initiative by the office of the samahan treasurer</Typography>
          </Box>

          <Grid container spacing={2} maxWidth={"sm"} sx={{marginLeft: "10px", marginTop: "150px" }} justifyContent="left">
            

          <GradientHeader variant="h2" text="About us"/>
          
         <Typography> AdDU To Cart is an initiative by the Office of the SAMAHAN Treasurer under the Samahan ng mga Mag-aaral ng Pamatansang Ateneo de Davao. The initiative is inspired by the rise and growth of many small and student-owned businesses over the course of the COVID-19 pandemic for them to cope with financial difficulties and drive income despite the lockdowns.</Typography>
          <br />
          <br />
          <Typography>AdDU To Cart, through its website and events, aims to provide support for Atenean owned small and local businesses and to widen their audience within the university. The website will help Atenean consumers have a catalogue of Atenean businesses for an easier and faster shopping experience. </Typography>
          <br />
          <br />
         <Typography>This December 2021, AdDU To Cart will also donate to our beneficiary community, Amihan sa Dahican, which offers small services and facilities to support 40 Amihan youth grade school to college and to promote turtle conservation and its sanctuary. With the proceeds from AdDU To Cart 2021, SAMAHAN aims to provide school supplies to support the continuing education of the youth in their community.</Typography>
         <br />
          <br />
          </Grid>
          <Grid container spacing={2} maxWidth={"sm"} sx={{marginLeft: "10px"}} justifyContent="left">
         <Typography>Twitter: @addutocart2021</Typography>
    <Typography>Facebook: ADDU To Cart</Typography>
    <Typography>Instagram: </Typography>
    <Typography>Email: samahanaddutocart@gmail.com
</Typography>

<br />
<br />
          </Grid>

          <Box>
         <center> <GradientHeader variant="h2" text="FAQS"/></center>
          <h1>What is Addu To Cart?</h1>
         <Typography>AdDU To Cart is a business website initiative aiming to give support to Ateneans owned local businesses.The website will serve as a catalogue of the businesses along with all the products and services that they are offering.</Typography>
         <br />
         <h1>How do i order?</h1>
         
        <typography>After you go through the website and choose a specific product or business, there will be a button that says “Order/Inquire” and you will be directed to the shop’s original page. There, you will send a message indicating your order.</typography>
         
        <br />
         <h1>How do i recieve my order?</h1>
         <typography>Depending on the shop, you may choose to have your order shipped, delivered, or picked up. Additional fees are subject to be paid by the buyer for shipment and delivery that will also be organized by the seller.</typography>
         <br />
         <h1>How can I receive vouchers and discounts?</h1>
         <typography>There will be a live event on the AdDU To Cart Facebook page where games will be held. You can participate in the games to get a chance to win vouchers and discounts.</typography>
         <br />
         <h1>Where can I use the vouchers and discounts?</h1>
         <typography>Vouchers and discounts are exclusive only to participating businesses found in the AdDU To Cart website. Present it to the sellers upon ordering.</typography>
         <br />
          <h1>Until when can I use the vouchers and discounts?</h1>
          <typography>You can use your vouchers and discounts until December 30, 2021</typography>
          <br />
          <h1>I have more questions. Where can I ask?</h1>
          <typography>You may message us in the AdDU To Cart Facebook and Twitter social media 
accounts, or email us at samahanaddutocart@gmail.com
</typography>
<br />
<br />
         </Box>
         <Box>
          <GradientHeader variant="h2" text="Policies"/>
         <typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</typography>
          </Box>
          
      </Box>
       
      </ThemeProvider>
       
    )

}