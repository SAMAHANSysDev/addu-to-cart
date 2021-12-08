import React, { useState } from "react";

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import MUILink from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from "next/link";

import MenuIcon from '@mui/icons-material/Menu';

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

export default function NavDrawer(){
    const [openDrawer, setOpenDrawer] = useState(false);
    return(
        <ThemeProvider theme={theme}>
            <Drawer 
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <Typography variant="h6" component="div" color="common.black">
                            <Link href="/food" passHref>
                                <MUILink color="inherit" underline="hover">FOOD</MUILink>
                            </Link>
                        </Typography>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <Typography variant="h6" component="div" color="common.black">
                            <Link href="/clothing" passHref>
                                <MUILink color="inherit" underline="hover">CLOTHING</MUILink>
                            </Link>
                        </Typography>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <Typography variant="h6" component="div" color="common.black">
                            <Link href="/health" passHref>
                                <MUILink color="inherit" underline="hover">HEALTH</MUILink>
                            </Link>
                        </Typography>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <Typography variant="h6" component="div" color="common.black">
                            <Link href="/home-living" passHref>
                                <MUILink color="inherit" underline="hover">HOME LIVING</MUILink>
                            </Link>
                        </Typography>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <Typography variant="h6" component="div" color="common.black">
                            <Link href="/services" passHref>
                                <MUILink color="inherit" underline="hover">SERVICES</MUILink>
                            </Link>
                        </Typography>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <Typography variant="h6" component="div" color="common.black">
                            <Link href="/shops" passHref>
                                <MUILink color="inherit" underline="hover">SHOPS DIRECTORY</MUILink>
                            </Link>
                        </Typography>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton
                size="large"
                edge="start"
                color="default"
                aria-label="open drawer"
                sx={{mr: 2}}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon/>
            </IconButton>
        </ThemeProvider>
    )
}