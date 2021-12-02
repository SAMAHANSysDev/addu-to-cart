import React from 'react';
import { Button, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles'

const GradientButton = styled(Button)(({theme}) =>({
    background: "linear-gradient(to bottom, #FF4359, #FF8A25)",
    color: "white",
    padding: 15,
    letterSpacing: 1,
    borderRadius: 20
}))


export default function GradButton(props){
    return(
        <GradientButton variant="contained">
            <Typography variant="h5">{props.text}</Typography>
        </GradientButton>
    )
}
