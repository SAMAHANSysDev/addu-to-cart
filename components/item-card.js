import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Card } from "@mui/material";
import { CardActions, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material";
import { styled, alpha, createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import GradientHeader from "./gradient-headline";

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

export default function ItemCard(){
    return(
        <ThemeProvider theme={theme}>
            <Card sx={{maxHeight: 400, width: 265, padding: 1, borderRadius: 5}}>
                <Link href="/item" passHref>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image="/promo-boy.png"
                        alt="item preview"
                    />
                    <CardContent>
                        <GradientHeader variant="h3" text="₱21" component="div"/>
                        <Typography variant="body_italic">
                            Laptop Model 21
                        </Typography>
                    </CardContent>
                </CardActionArea>
                </Link>
            </Card>
        </ThemeProvider>
    )
}