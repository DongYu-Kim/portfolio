import { Box, Typography } from '@mui/material';
import Kurento from './Kurento';
import SocketIO from './SocketIO';
import Tensorflow from './Tensorflow';
import Unity from './Unity';

function Others() {

    return <Box sx={{display: "inline-block", width: "245px"}}>
        <Typography variant='h6' textAlign="center">Others</Typography>
        <SocketIO />
        <Kurento />
        <Tensorflow />
        <Unity />
    </Box>
}

export default Others;