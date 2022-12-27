import Box from '@mui/material/Box';
import Fade from 'react-reveal/Fade';


function Image() {
    return <Box sx={{ display: "inline-block" }}>
        <Fade>
        <img 
            src='images/introduceimage.jpg' alt='Introduce'
            height='100%'
            width='300px'
        />
        </Fade>
    </Box>
};

export default Image;