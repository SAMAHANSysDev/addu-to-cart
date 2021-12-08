import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import GradientHeader from '../components/gradient-headline';
import styles from '../styles/Home.module.css'
import { styled, alpha, createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { Container, Box, Typography, Grid, Paper, IconButton, Button} from '@mui/material';
import ItemCard from '../components/item-card';
import { useRouter } from 'next/router';

let theme = createTheme({
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

theme = responsiveFontSizes(theme);

export default function Search(){
    const router = useRouter();
    console.log(router.query.query);

    return(
        <ThemeProvider theme={theme}>
            <Box sx={{marginTop: 2, padding: 5, backgroundColor: "#F5F5F5", width: "100%"}}>
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
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}