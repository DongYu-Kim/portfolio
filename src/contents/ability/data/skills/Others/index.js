import { Box, Typography } from '@mui/material';
import Kurento from './Kurento';
import SocketIO from './SocketIO';
import Tensorflow from './Tensorflow';
import Unity from './Unity';

function Others({ detail }) {

    return <Box sx={{display: "inline-block", width: "245px"}}>
        <Typography variant='h6' textAlign="center">Others</Typography>
        <SocketIO detail={detail} />
        <Kurento detail={detail} />
        <Tensorflow detail={detail} />
        <Unity detail={detail} />
    </Box>
}

export default Others;