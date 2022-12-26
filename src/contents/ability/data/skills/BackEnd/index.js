import { Box, Typography } from '@mui/material';
import Django from './Django';
import Express from './Express';

function BackEnd({ detail }) {

    return <Box sx={{display: "inline-block", width: "245px"}}>
        <Typography variant='h6' textAlign="center" fontWeight="bold" >BackEnd</Typography>
        <Django detail={detail} />
        <Express detail={detail} />
    </Box>
}

export default BackEnd;