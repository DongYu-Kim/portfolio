import { Box, Typography } from '@mui/material';
import { sweaId } from "../../../../data"


function Swea() {
    
    return <Box sx={{display: "inline-block", width: "330px"}} >
        <Typography variant='h6' textAlign="center" margin="6px" fontWeight="bold" >SWEA</Typography>
        <Box sx={{display: "flex", justifyContent: "center"}}>
            <a 
                href={`https://swexpertacademy.com/main/userpage/home/userHome.do?userId=${sweaId}`} 
                target='_blank' rel='noreferrer'
                style={{width: "300px"}}
            >
                <img 
                    src={"images/swea.jpg"} 
                    alt={sweaId} style={{width: "inherit", borderRadius: "0.7rem"}}
                />
            </a>
        </Box>
    </Box>
};

export default Swea;