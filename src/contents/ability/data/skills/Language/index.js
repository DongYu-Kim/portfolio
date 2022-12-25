import { Box, Typography } from '@mui/material';
import C from './C';
import Cpp from './Cpp';
import Csharp from './Csharp';
import Python from './Python';
import Java from './Java';
import Javascript from './Javascript';



function Language() {

    return <Box sx={{display: "inline-block", width: "245px"}}>
        <Typography variant='h6' textAlign="center">Language</Typography>
        <C />
        <Cpp />
        <Csharp />
        <Python />
        <Java />
        <Javascript />
    </Box>
}

export default Language;