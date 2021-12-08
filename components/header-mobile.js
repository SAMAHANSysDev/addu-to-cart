import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { styled, alpha, createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { AppBar, Toolbar, Drawer, InputBase, Box, Typography, IconButton, Button, TextField } from '@mui/material';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as MUILink } from '@mui/material';
import Logo from '../public/logo.png';
import NavDrawer from './nav-drawer';
import { useState } from 'react';
import { useRouter } from 'next/router';

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

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.common.black, 0.10),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('lg')]:{
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'default',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      color: '#FF8A25',
      [theme.breakpoints.up('lg')]: {
        width: '70vw',
        '&:focus': {
          width: '70vw',
        },
      },
    },
}));

const handleSearch = () => {

}

export default function MobileHeader(){
    const router = useRouter();
    const [search, setSearch] = useState('');
    return(
        <ThemeProvider theme={theme}>
            <Box sx={{flexGrow: 1}}>
            <AppBar position="static" style={{background: '#FFFFFF'}} elevation={0}>
                <Toolbar>
                    <NavDrawer/>
                    <Link href="/" passHref>
                        <IconButton 
                            size="large"
                            color="inherit"
                            aria-label="home"
                        >
                            <Image src={Logo} alt="logo" layout="intrinsic"/>
                        </IconButton>
                    </Link>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon sx={{color: '#FF8A25'}} />
                        </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Search for items…"
                            inputProps={{ 'aria-label': 'search'}}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => {
                                if(e.key === "Enter"){
                                    router.push({
                                            pathname: '/search',
                                            query: {query: search}
                                        })
                                }
                            }}
                            />
                    </Search>
                </Toolbar>
            </AppBar>
            </Box>
        </ThemeProvider>
    )
}