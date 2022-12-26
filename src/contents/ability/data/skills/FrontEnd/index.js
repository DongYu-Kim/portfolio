import { Box, Typography } from '@mui/material';
import Vue from './Vue';
import React from './React';
import Redux from './Redux';
import Next from './Next';


function FrontEnd({ detail }) {

    return <Box sx={{display: "inline-block", width: "245px"}}>
        <Typography variant='h6' textAlign="center">FrontEnd</Typography>
        <Vue detail={detail} />
        <React detail={detail} />
        <Redux detail={detail} />
        <Next detail={detail} />
    </Box>
}

export default FrontEnd;