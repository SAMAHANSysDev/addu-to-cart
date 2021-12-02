import Head from 'next/head'
import Image from 'next/image'
import LoadMoreButton from '../components/load-more-button';
import GradientHeader from '../components/gradient-headline';
import GradButton from '../components/gradient-button';
import styles from '../styles/Home.module.css'
import { styled, alpha, createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { Avatar, Box, Typography, Grid, Paper, CardHeader } from '@mui/material';
import React from 'react';

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
          fontWeight: 700,
          fontSize: 48,
      },
      h3: {
          fontWeight: 700,
          fontSize: 36,
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

export default function Item() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{marginTop: 2, padding: 5, backgroundColor: "#F5F5F5"}}>
        <Paper elevation={4}
          sx={{
            margin: "auto",
            position: "relative", 
            width: "80%",
            padding: 5,
            minHeight: "400px", 
            borderRadius: "30px"
            }}>
            <Grid container spacing={3} direction="row">
              <Grid item md={4}>
                <Grid container item justifyContent="center">
                  <Image src="/promo-boy.png" width="250px" height="250px"></Image>
                </Grid>
                <Grid container item justifyContent="center">
                  <Grid item>
                    <Image src="/promo-boy.png" width="50px" height="50px"></Image>
                  </Grid>
                  <Grid item>
                    <Image src="/promo-boy.png" width="50px" height="50px"></Image>
                  </Grid>
                  <Grid item>
                    <Image src="/promo-boy.png" width="50px" height="50px"></Image>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={8}>
                <Grid item>
                  <Typography variant="h2" color="common.black">Laptop Model 21</Typography>
                </Grid>
                <Grid container spacing={4} alignItems="center">
                  <Grid item>
                    <GradientHeader variant="h2" text="Php 21"/>
                  </Grid>
                  <Grid item>
                    <CardHeader
                      avatar={
                        <Avatar>H</Avatar>
                      }
                      title="Jolibee"
                      titleTypographyProps={{variant: "h5"}}
                    />
                  </Grid>
                </Grid>
                <Grid container item paddingY={3} direction="column">
                  <Typography variant="h5" sx={{wordWrap: "break-word"}}>The Ordinary Squalane Cleanser is a gentle cleansing product formulated to target makeup asdsd asdasdsa asdd asdasd asdasdsa</Typography>
                </Grid>
                <Grid container item spacing={3} alignItems="center">
                  <Grid item>
                    <GradButton text="ORDER"/>
                  </Grid>
                  <Grid item>
                    <GradButton text="INQUIRE"/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Paper>
        <Box sx={{margin: "auto", marginTop: 2, width: "80%", paddingY: 5}}>
          <Box>
              <Typography variant="h3" color="common.black" marginY={2}>Suggested</Typography>
              <Grid container spacing={3} sx={{margin: "auto"}} justifyContent="center">
                {/*Add map function later*/}
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
              <Grid container justifyContent="center" marginY={4}>
                <LoadMoreButton/>
              </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
