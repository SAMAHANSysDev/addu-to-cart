import React from 'react';
import Image from 'next/image';
import { styled, alpha, createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { AppBar, Toolbar, Box, Typography, IconButton, Button, TextField } from '@mui/material';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Gradient } from '@mui/icons-material';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Poppins'
        ].join(','),
        h6: {
            fontWeight: 400,
            fontSize: 18,
        }
    },
});

const handleSearch = () => {

}

function Header(){
    return(
        <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" style={{background: '#FFFFFF'}} elevation={0}>
                <Toolbar>
                    <IconButton 
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ ml: 20}}
                    >
                        <Image src="/logo.png" alt="logo" width="96px" height="124px" layout="intrinsic"/>
                    </IconButton>
                    <Box sx={{ ml: 3, flexGrow: 2}}>
                        <Box sx={{mr: 20}}>
                            <TextField
                            label="Search for products.."
                            variant="filled"
                            InputLabelProps={{
                                style: {color: '#FF8A25'}
                            }}
                            InputProps={{
                                style: { borderRadius: 20},
                                disableUnderline: true,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="search"
                                            onClick={handleSearch}
                                            style={{
                                                marginRight: 5,
                                                }}
                                            edge="end"
                                        >
                                            <SearchIcon style={{color: '#FF8A25'}}/>
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                            >
                            </TextField>
                        </Box>
                        <Box sx={{display: 'flex', mt: 2, alignContent: 'space-evenly'}}>
                            <Box mr={3}>
                                <Typography variant="h6" component="div" color="common.black">
                                    FOOD
                                </Typography>
                            </Box>
                            <Box mr={3}>
                                <Typography variant="h6" component="div" color="common.black">
                                    CLOTHING
                                </Typography>
                            </Box>
                            <Box mr={3}>
                                <Typography variant="h6" component="div" color="common.black">
                                    HEALTH
                                </Typography>
                            </Box>
                            <Box mr={3}>
                                <Typography variant="h6" component="div" color="common.black">
                                    HOME LIVING
                                </Typography>
                            </Box>
                            <Box mr={3}>
                                <Typography variant="h6" component="div" color="common.black">
                                    SERVICES
                                </Typography>
                            </Box>
                            <Box mr={3}>
                                <Typography variant="h6" component="div" color="common.black">
                                    SHOPS DIRECTORY
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
        </ThemeProvider>
    )
}

export default Header