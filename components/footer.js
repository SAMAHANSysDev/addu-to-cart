import React from 'react';
import Image from 'next/image';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import Link from 'next/link';
import { Link as MUILink } from "@mui/material";

import Logo from '../public/logo.png'

import { useQuery, gql } from "@apollo/client";

const QUERY_CATEGORIES = gql`
  query Categories  {
    categories {
      id
      name
    }
  }
`;

let theme = createTheme({
    typography: {
        fontFamily: [
            'Poppins'
        ].join(','),
        h5: {
            fontWeight: 700,
            fontSize: 28,
        },
        h6_bold: {
            fontWeight: 500,
            fontSize: 18,
        },
        h6: {
            fontWeight: 400,
            fontSize: 18,
        },
        body: {
            fontWeight: 400,
            fontSize: 14,
        }
    },
});

theme = responsiveFontSizes(theme)

function Footer(){
    const { data, loading, error } = useQuery(QUERY_CATEGORIES);

    return(
        <ThemeProvider theme={theme}>
            <Box sx={{padding: 5, flexGrow: 1}}>
                <Grid container spacing={1} columns={{lg: 16}} justifyContent="center">
                    <Grid item lg={4} justifyContent="center">
                        <center>
                            <IconButton 
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                            >
                                <Image src={Logo} alt="logo"/>
                            </IconButton>
                        </center>
                    </Grid>
                    <Grid container item lg={12} justifyContent="center" spacing={2}>
                        <Grid item lg={3}>
                            <Grid item style={{ marginBottom: '1rem' }}>
                                <Typography variant="h5" color="common.black">Explore</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6_bold" color="common.black">Home</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6_bold" color="common.black">Videos</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6_bold" color="common.black">FB Live</Typography>
                            </Grid>
                        </Grid>
                        { !loading ? (
                            <Grid item lg={3}>
                                <Grid item style={{ marginBottom: '1rem' }}>
                                    <Typography variant="h5" color="common.black">Shops</Typography>
                                </Grid>
                                { data.categories.map((category) => (
                                    <Grid item key={category.id}>
                                    <Typography variant="h6_bold" component="div" color="common.black">
                                        <Link href={`/categories/${category.id}`} passHref>
                                            <MUILink color="inherit" underline="hover">
                                                {category.name}
                                            </MUILink>
                                        </Link>
                                    </Typography>
                                    </Grid>
                                )) }
                            </Grid>
                        ) : null }
                        <Grid item lg={3}>
                            <Grid item style={{ marginBottom: '1rem' }}>
                                <Typography variant="h5" color="common.black">Info</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6_bold" color="common.black">About Us</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6_bold" color="common.black">FAQs</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6_bold" color="common.black">Policies</Typography>
                            </Grid>
                        </Grid>
                        <Grid item lg={3}>
                            <Grid item style={{ marginBottom: '1rem' }}>
                                <Typography variant="h5" color="common.black">Connect</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6_bold" color="common.black">Facebook</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6_bold" color="common.black">Twitter</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6_bold" color="common.black">Instagram</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box sx={{margin: 'auto', textAlign: 'center', marginTop: 5}}>
                    <Typography variant="body" component="div" color="common.black">Copyright 2021 SAMAHAN Central Board | Developed by SAMAHAN Creative Team and SAMAHAN System Development</Typography>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default Footer