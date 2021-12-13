import React from "react";
import Link from 'next/link';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';

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
        body: {
            fontWeight: 400,
            fontSize: 18,
        },
        body_italic: {
            fontWeight: 400,
            fontSize: 18,
            fontStyle: "italic"
        }
    },
  });

export default function ShopCard({ shop }){
    return(
        <ThemeProvider theme={theme}>
            <CardActionArea style={{ borderRadius: 20 }}>
                <Card 
                    sx={{minHeight: 375, width: 265, padding: 1, borderRadius: 5}}
                    onClick={() => {window.open(shop.url, '_blank');}}
                    >
                    <CardMedia
                        component="img"
                        image={`https://samahan-cloud.addu.edu.ph/assets/${shop.logo?.filename_disk}?width=250&height=250`}
                        alt="icon preview"
                        style={{ borderRadius: 20 }}
                    />
                    <CardContent>
                        <Typography variant="h6">
                            {shop.name}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </ThemeProvider>
    )
}