import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import SeeMoreButton from '../components/see-more-button';
import GradientHeader from '../components/gradient-headline';
import styles from '../styles/Home.module.css'
import { styled, alpha, createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { Container, Box, Typography, Grid, Paper, IconButton, Button} from '@mui/material';
import ItemCard from '../components/item-card';
import React from 'react';
import PosterBoy from '../public/promo-boy.png'

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

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{marginTop: 2, padding: 5, backgroundColor: "#F5F5F5", width: "100%"}}>
        <Box 
          sx={{
            margin: "auto",
            position: "relative", 
            width: "80%",
            minHeight: "400px", 
            background: "linear-gradient(to right, #FF8A25, #FF4359)",
            borderRadius: "30px"
            }}>
            <Box
              sx={{
                padding: 6,
                mx: 2,
              }}>
              <Typography variant="h1" color="common.white">11.11 SALE!</Typography>
              <Typography variant="h5" color="common.white">COMING SOON (PUBMATS HERE)</Typography>
              <div className="poster-boy">
                <Image src={PosterBoy} alt="promo-boy" layout="intrinsic"/>
              </div>
            </Box>
        </Box>
        <Box
          sx={{
            margin: "auto",
            marginTop: 2,
            width: "80%"
          }}>
          <Box>
              <GradientHeader variant="h2" text="FOOD"/>
              <Grid container spacing={2} sx={{margin: "auto"}} justifyContent="center">
                <Grid item>
                  <ItemCard/>
                </Grid>
                <Grid item>
                  <ItemCard/>
                </Grid>
                <Grid item>
                  <ItemCard/>
                </Grid>
                <Grid item>
                  <ItemCard/>
                </Grid>
                <Grid item>
                  <ItemCard/>
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-end" marginTop={3}>
                <SeeMoreButton href="/food"/>
              </Grid>
          </Box>
          <Box>
              <GradientHeader variant="h2" text="CLOTHING"/>
              <Grid container spacing={2} sx={{margin: "auto"}} justifyContent="center">
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-end" marginTop={3} >
                <SeeMoreButton href="/clothing"/>
              </Grid>
          </Box>
          <Box>
              <GradientHeader variant="h2" text="HEALTH"/>
              <Grid container spacing={2} sx={{margin: "auto"}} justifyContent="center">
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-end" marginTop={3} marginBottom={2}>
                <SeeMoreButton href="/health"/>
              </Grid>
          </Box>
          <Box>
              <GradientHeader variant="h2" text="HOME LIVING"/>
              <Grid container spacing={2} sx={{margin: "auto"}} justifyContent="center">
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-end" marginTop={3} marginBottom={2}>
                <SeeMoreButton href="/home-living"/>
              </Grid>
          </Box>
          <Box>
              <GradientHeader variant="h2" text="SERVICES"/>
              <Grid container spacing={2} sx={{margin: "auto"}} justifyContent="center">
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
                <Grid item>
                  <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-end" marginTop={3} marginBottom={2}>
                <SeeMoreButton href="/services"/>
              </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
