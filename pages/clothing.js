import Head from 'next/head'
import Image from 'next/image'
import LoadMoreButton from '../components/load-more-button';
import GradientHeader from '../components/gradient-headline';
import styles from '../styles/Home.module.css'
import { styled, alpha, createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { AppBar, Toolbar, Box, Typography, Grid, Paper, IconButton, Button, TextField } from '@mui/material';
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

export default function Food() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{marginTop: 2, padding: 5, backgroundColor: "#F5F5F5"}}>
        <Box sx={{margin: "auto", marginTop: 2, width: "80%"}}>
          <Box>
              <GradientHeader variant="h2" text="CLOTHING"/>
              <Grid container spacing={2} sx={{margin: "auto"}} justifyContent="center">
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
