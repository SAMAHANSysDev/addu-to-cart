import React from 'react';
import Image from 'next/image'
import LoadMoreButton from '../components/load-more-button';
import GradientHeader from '../components/gradient-headline';
import GradButton from '../components/gradient-button';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';

import ItemCard from '../components/item-card';

export default function Item() {
  return (
    <Box sx={{marginTop: 2, padding: 5, backgroundColor: "#F5F5F5"}}>
      <Paper elevation={4}
        sx={{
          margin: "auto",
          position: "relative", 
          width: "80%",
          padding: 5,
          minHeight: "400px", 
          borderRadius: "30px"
          }}>
          <Grid container spacing={3} direction="row">
            <Grid item md={4}>
              <Grid container item justifyContent="center">
                <Image src="/promo-boy.png" width="250px" height="250px"></Image>
              </Grid>
              <Grid container item justifyContent="center">
                <Grid item>
                  <Image src="/promo-boy.png" width="50px" height="50px"></Image>
                </Grid>
                <Grid item>
                  <Image src="/promo-boy.png" width="50px" height="50px"></Image>
                </Grid>
                <Grid item>
                  <Image src="/promo-boy.png" width="50px" height="50px"></Image>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={8}>
              <Grid item>
                <Typography variant="h2" color="common.black">Laptop Model 21</Typography>
              </Grid>
              <Grid container spacing={4} alignItems="center">
                <Grid item>
                  <GradientHeader variant="h2" text="Php 21"/>
                </Grid>
                <Grid item>
                  <CardHeader
                    avatar={
                      <Avatar>H</Avatar>
                    }
                    title="Jolibee"
                    titleTypographyProps={{variant: "h5"}}
                  />
                </Grid>
              </Grid>
              <Grid container item paddingY={3} direction="column">
                <Typography variant="h5" sx={{wordWrap: "break-word"}}>The Ordinary Squalane Cleanser is a gentle cleansing product formulated to target makeup asdsd asdasdsa asdd asdasd asdasdsa</Typography>
              </Grid>
              <Grid container item spacing={3} alignItems="center">
                <Grid item>
                  <GradButton text="ORDER"/>
                </Grid>
                <Grid item>
                  <GradButton text="INQUIRE"/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      </Paper>
      <Box sx={{margin: "auto", marginTop: 2, width: "80%", paddingY: 5}}>
        <Box>
            <Typography variant="h3" style={{ fontSize: 36 }} color="common.black" marginY={2}>Suggested</Typography>
            <Grid container spacing={3} sx={{margin: "auto"}} justifyContent="center">
              {/*Add map function later*/}
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
            <Grid container justifyContent="center" marginY={4}>
              <LoadMoreButton/>
            </Grid>
        </Box>
      </Box>
    </Box>
  )
}
