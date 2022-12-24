import Box from '@mui/material/Box';

function Image() {
    return <Box sx={{ display: "inline-block" }}>
        <img 
            src='images/IntroduceImage.jpg' alt='Introduce'
            height='100%'
            width='300px'
        />
    </Box>
};

export default Image;