import { Box, Typography } from '@mui/material';
import Vue from './Vue';
import React from './React';
import Redux from './Redux';
import Next from './Next';


function FrontEnd() {

    return <Box sx={{display: "inline-block", width: "245px"}}>
        <Typography variant='h6' textAlign="center">FrontEnd</Typography>
        <Vue />
        <React />
        <Redux />
        <Next />
    </Box>
}

export default FrontEnd;