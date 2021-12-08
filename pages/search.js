import React from 'react';
import GradientHeader from '../components/gradient-headline';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import SearchCard from '../components/search-card';
import { useRouter } from 'next/router';

export default function Search(){
    const router = useRouter();
    console.log(router.query.query);

    return(
        <Box sx={{marginTop: 2, padding: 5, backgroundColor: "#F5F5F5", width: "100%"}}>
            <Box
            sx={{
                margin: "auto",
                marginTop: 2,
                width: "80%"
            }}>
                <Box>
                    <GradientHeader variant="h2" text="FOOD"/>
                    <Grid container spacing={2} sx={{margin: "auto"}} justifyContent="center">
                        <Grid item>
                        <SearchCard/>
                        </Grid>
                        <Grid item>
                        <SearchCard/>
                        </Grid>
                        <Grid item>
                        <SearchCard/>
                        </Grid>
                        <Grid item>
                        <SearchCard/>
                        </Grid>
                        <Grid item>
                        <SearchCard/>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}