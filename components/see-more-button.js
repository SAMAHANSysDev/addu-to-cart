import React from 'react';
import Link from 'next/link';
import { Button, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles'
import { PinDropSharp } from '@mui/icons-material';

const GradientButton = styled(Button)(({theme}) =>({
    background: "linear-gradient(to bottom, #FF4359, #FF8A25)",
    color: "white",
    padding: 15,
    letterSpacing: 1,
    borderRadius: 20
}))


export default function SeeMoreButton(props){
    return(
        <Link href={props.href}>
            <GradientButton variant="contained">
                <Typography variant="h5">SEE MORE</Typography>
            </GradientButton>
        </Link>
    )
}
