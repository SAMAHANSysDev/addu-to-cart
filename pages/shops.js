import LoadMoreButton from '../components/load-more-button';
import GradientHeader from '../components/gradient-headline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React from 'react';

export default function Shops() {
  return (
    <Box sx={{marginTop: 2, padding: 5, backgroundColor: "#F5F5F5"}}>
      <Box sx={{margin: "auto", marginTop: 2, width: "80%"}}>
        <Box>
            <GradientHeader variant="h2" text="SHOPS"/>
            <Grid container spacing={2} sx={{margin: "auto"}} justifyContent="center">
              {/*Add map function later*/}
              <Grid item> 
                <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
              </Grid>
              <Grid item>
                <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
              </Grid>
              <Grid item>
                <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
              </Grid>
              <Grid item>
                <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
              </Grid>
              <Grid item>
                <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
              </Grid>
              <Grid item>
                <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
              </Grid>
              <Grid item>
                <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
              </Grid>
              <Grid item>
                <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
              </Grid>
              <Grid item>
                <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
              </Grid>
              <Grid item>
                <Paper elevation={1} sx={{height: 400, width: 265}}>Hello!</Paper>
              </Grid>
            </Grid>
{/*             <Grid container justifyContent="center" marginY={4}>
              <LoadMoreButton/>
            </Grid> */}
        </Box>
      </Box>
    </Box>
  )
}
