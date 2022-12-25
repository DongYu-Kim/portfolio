import { Box, Typography } from '@mui/material';
import Django from './Django';
import Express from './Express';

function BackEnd() {

    return <Box sx={{display: "inline-block", width: "245px"}}>
        <Typography variant='h6' textAlign="center">BackEnd</Typography>
        <Django />
        <Express />
    </Box>
}

export default BackEnd;