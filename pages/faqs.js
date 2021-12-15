import React from 'react'
import GradientHeader from '../components/gradient-headline'
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'

import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

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
  
  responsiveFontSizes(theme);

export default function aboutus(){
    return(
        <ThemeProvider theme={theme}>
            <Box sx = {{marginTop: 2, padding: 5, backgroundColor: "#F5F5F5"}}>
                <Box sx={{margin: "auto", marginTop: 2, width: "80%"}}>
                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item lg={6}>
                            <Image src= "/two-combined.png" alt="addutocart" width={491} height={576} layout="intrinsic"/>
                        </Grid>
                        <Grid item lg={6}>
                            <GradientHeader variant="h2" text="AdDU to Cart"/>
                            <Typography>A business website initiative by the office of the samahan treasurer</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} alignItems="center" justifyContent="center">
                        <Grid item lg={6}>
                            <GradientHeader variant="h2" text="About Us"/>
                            <br/>
                            <Typography align="justify"> AdDU To Cart is an initiative by the Office of the SAMAHAN Treasurer under the Samahan ng mga Mag-aaral ng Pamatansang Ateneo de Davao. The initiative is inspired by the rise and growth of many small and student-owned businesses over the course of the COVID-19 pandemic for them to cope with financial difficulties and drive income despite the lockdowns.</Typography>
                            <br/>
                            <Typography align="justify">AdDU To Cart, through its website and events, aims to provide support for Atenean owned small and local businesses and to widen their audience within the university. The website will help Atenean consumers have a catalogue of Atenean businesses for an easier and faster shopping experience. </Typography>
                            <br/>
                            <Typography align="justify">This December 2021, AdDU To Cart will also donate to our beneficiary community, Amihan sa Dahican, which offers small services and facilities to support 40 Amihan youth grade school to college and to promote turtle conservation and its sanctuary. With the proceeds from AdDU To Cart 2021, SAMAHAN aims to provide school supplies to support the continuing education of the youth in their community.</Typography>
                            <br/>
                            <Typography variant='h5_bold'>Twitter: @addutocart2021</Typography>
                            <Typography variant='h5_bold' display="block">Facebook: ADDU To Cart</Typography>
                            <Typography variant='h5_bold'>Email: samahanaddutocart@gmail.com</Typography>
                        </Grid>
                        <Grid item lg={6} sx={{margin: 'auto'}}>
                            <Image src= "/three-combined.png" alt="addutocart" width={460} height={346} layout="intrinsic"/>
                        </Grid>
                    </Grid>
{/*                     <Box>
                        <div><Image src= "/two-combined.png" alt="addutocart" width={500} height={500} layout="intrinsic"/></div>
                    </Box>
                    <Box marginLeft={100}>
                        <GradientHeader variant="h2" text="AdDU to Cart"/>
                        <Typography>A business website initiative by the office of the samahan treasurer</Typography>
                    </Box> */}
{/*                     <Grid container spacing={2} maxWidth={"sm"} sx={{marginLeft: "10px", marginTop: "150px" }} justifyContent="left">
                        <GradientHeader variant="h2" text="About Us"/>
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
                    <Grid container spacing={2} maxWidth={"sm"} sx={{marginLeft: "1px"}} justifyContent="left">
                    <Typography>Twitter: @addutocart2021</Typography>
                    </Grid>
                        <Typography>Facebook: ADDU To Cart</Typography>
                        <Typography>Email: samahanaddutocart@gmail.com</Typography> */}
                    <Box>
                        <Box sx={{padding: 3}}>
                        <center> <GradientHeader variant="h2" text="FAQS"/></center>
                        </Box>
                        <Typography variant="h3">What is AdDU To Cart?</Typography>
                        <br/>
                        <Typography>AdDU To Cart is a business website initiative aiming to give support to Ateneans owned local businesses.The website will serve as a catalogue of the businesses along with all the products and services that they are offering.</Typography>
                        <br />
                        <br />
                        <Typography variant="h3">How do I order?</Typography>
                        <br/>
                        <Typography>After you go through the website and choose a specific product or business, there will be a button that says “Order/Inquire” and you will be directed to the shop’s original page. There, you will send a message indicating your order.</Typography>
                        <br />
                        <br />
                        <Typography variant="h3">How do I recieve my order?</Typography>
                        <br/>
                        <Typography>Depending on the shop, you may choose to have your order shipped, delivered, or picked up. Additional fees are subject to be paid by the buyer for shipment and delivery that will also be organized by the seller.</Typography>
                        <br />
                        <br />
                        <Typography variant="h3">How can I receive vouchers and discounts?</Typography>
                        <br/>
                        <Typography>There will be a live event on the AdDU To Cart Facebook page where games will be held. You can participate in the games to get a chance to win vouchers and discounts.</Typography>
                        <br />
                        <br />
                        <Typography variant="h3">Where can I use the vouchers and discounts?</Typography>
                        <br/>
                        <Typography>Vouchers and discounts are exclusive only to participating businesses found in the AdDU To Cart website. Present it to the sellers upon ordering.</Typography>
                        <br />
                        <br />
                        <Typography variant="h3">Until when can I use the vouchers and discounts?</Typography>
                        <br/>
                        <Typography>You can use your vouchers and discounts until December 30, 2021.</Typography>
                        <br />
                        <br />
                        <Typography variant="h3">I have more questions. Where can I ask?</Typography>
                        <br/>
                        <Typography>You may message us in the AdDU To Cart Facebook and Twitter social media 
                        accounts, or email us at samahanaddutocart@gmail.com.
                        </Typography>
                        <br />
                    </Box>
                </Box>`
            </Box>
      </ThemeProvider>
       
    )

}