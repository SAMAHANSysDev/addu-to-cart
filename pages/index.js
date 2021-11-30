import Head from 'next/head'
import Image from 'next/image'
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

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{marginTop: 2}}>
        <Box 
          sx={{
            margin: "auto", 
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
            </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
