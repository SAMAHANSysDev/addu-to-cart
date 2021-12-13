import React from 'react';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles'

const GradientText = styled(Typography)(({theme}) =>({
    background: "linear-gradient(to bottom, #00ecc2, #0078ff)",
    WebkitBackgroundClip: "text",
    padding: 3,
    paddingTop: 10,
    letterSpacing: 2,
    WebkitTextFillColor: "transparent"
}))


export default function GradientHeader(props){
    return(
        <GradientText variant={props.variant}>{props.text}</GradientText>
    )
}
