import React from "react";
import Image from 'next/image';
import Link from 'next/link';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

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
            fontSize: 14,
        },
        body_italic: {
            fontWeight: 400,
            fontSize: 18,
            fontStyle: "italic"
        }
    },
  });

export default function SearchCard({ product }){
    return(
        <ThemeProvider theme={theme}>
            <Card sx={{maxHeight: 400, width: 265, padding: 1, borderRadius: 5}}>
                 <Link href={`/products/${product?.id}`} passHref>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={`https://samahan-cloud.addu.edu.ph/assets/${product?.images[0]?.directus_files_id?.filename_disk}?width=250&height=250`}
                        alt="item preview"
                        style={{ borderRadius: 20 }}
                    />
                    <CardContent>
                        <GradientHeader variant="h3" text={product?.price !== 0 ? `${product?.price_currency}${product?.price}` : 'Inquire'} component="div"/>
                        <Typography variant="body_italic" component="div">
                            {product?.name}
                        </Typography>
                        <Typography variant="body">
                            {product?.shop?.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                </Link>
            </Card>
        </ThemeProvider>
    )
}