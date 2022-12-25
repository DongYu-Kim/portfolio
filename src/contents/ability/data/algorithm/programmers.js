import { Box, Typography } from '@mui/material';


function Programmers() {
    
    return <Box sx={{display: "inline-block", width: "330px"}} >
        <Typography variant='h6' textAlign="center" >Programmers</Typography>
        <Box sx={{display: "flex", justifyContent: "center"}}>
            <span 
                style={{width: "300px"}}
            >
                <img 
                    src={`images/programmers.jpg`} 
                    alt={"programmers"} style={{width: "295px", border: "solid 2.5px gray", borderRadius: "0.7rem"}}
                />
            </span>
        </Box>
    </Box>
};

export default Programmers;