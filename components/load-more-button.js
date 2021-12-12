import React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { alpha, styled } from '@mui/material/styles'

const GradientButton = styled(Button)(({theme}) =>({
    background: "linear-gradient(to bottom, #00ecc2, #0078ff)",
    color: "white",
    padding: 15,
    letterSpacing: 1,
    borderRadius: 20
}))


export default function LoadMoreButton(){
    return(
        <GradientButton variant="contained">
            <Typography variant="h5">LOAD MORE</Typography>
        </GradientButton>
    )
}
