import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { styled, alpha, createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { AppBar, Toolbar, Box, Typography, IconButton, Button, TextField } from '@mui/material';
import { Link as MUILink } from '@mui/material';

const theme = createTheme({
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
        }
    },
});

function Footer(){
    return(
        <ThemeProvider theme={theme}>
            <Box>
                <AppBar sx={{ top: 'auto', bottom: 30, background: '#FFFFFF',}} elevation={0}>
                    <Toolbar>
                        <IconButton 
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ ml: 20, mb: 5}}
                        >
                            <Image src="/logo.png" alt="logo" width="96px" height="124px" layout="intrinsic"/>
                        </IconButton>
                        <Box sx={{mx: 5, flexGrow: 2, mb: 6}}>
                            <Box sx={{display: 'flex', alignContent: 'space-evenly'}}>
                                <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'space-between', flexGrow: 1}}>
                                    <Typography variant="h5" color="common.black" sx={{mb: 2}}>Explore</Typography>
                                    <Typography variant="h6_bold" color="common.black" sx={{mb: 1}}>Home</Typography>
                                    <Typography variant="h6_bold" color="common.black" sx={{mb: 1}}>Videos</Typography>
                                    <Typography variant="h6_bold" color="common.black" sx={{mb: 1}}>FB Live</Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'space-between', flexGrow: 1}}>
                                    <Typography variant="h5" color="common.black" sx={{mb: 2}}>Shop</Typography>
                                    <Typography variant="h6_bold" color="common.black" sx={{mb: 1}}>Food</Typography>
                                    <Typography variant="h6_bold" color="common.black" sx={{mb: 1}}>Clothing</Typography>
                                    <Typography variant="h6_bold" color="common.black" sx={{mb: 1}}>Health</Typography>
                                    <Typography variant="h6_bold" color="common.black" sx={{mb: 1}}>Home Living</Typography>
                                    <Typography variant="h6_bold" color="common.black" sx={{mb: 1}}>Services</Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'space-between', flexGrow: 1}}>
                                    <Typography variant="h5" color="common.black" sx={{mb: 2}}>Info</Typography>
                                    <Typography variant="h6_bold" color="common.black" sx={{mb: 1}}>About Us</Typography>
                                    <Typography variant="h6_bold" color="common.black" sx={{mb: 1}}>FAQs</Typography>
                                    <Typography variant="h6_bold" color="common.black" sx={{mb: 1}}>Policies</Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'space-between', flexGrow: 1}}>
                                    <Typography variant="h5" color="common.black" sx={{mb: 2}}>Connect</Typography>
                                    <Typography variant="h6_bold" color="common.black" sx={{mb: 1}}>Facebook</Typography>
                                    <Typography variant="h6_bold" color="common.black" sx={{mb: 1}}>Twitter</Typography>
                                    <Typography variant="h6_bold" color="common.black" sx={{mb: 1}}>Instagram</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Toolbar>
                    <Box sx={{margin: 'auto'}}>
                        <Typography variant="h6" component="div" color="common.black">Copyright 2021 SAMAHAN Central Board | Developed by SAMAHAN Creative Team and SAMAHAN System Development</Typography>
                    </Box>
                </AppBar>
                
            </Box>
        </ThemeProvider>
    )
}

export default Footer