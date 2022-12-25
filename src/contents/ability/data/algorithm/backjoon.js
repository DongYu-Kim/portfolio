import { Box, Typography } from '@mui/material';
import { backjoonId } from "../../../../data"


function Backjoon() {
    
    return <Box sx={{display: "inline-block", width: "330px"}} >
        <Typography variant='h6' textAlign="center" >BOJ</Typography>
        <Box sx={{display: "flex", justifyContent: "center"}}>
            <a 
                href={`https://www.acmicpc.net/user/${backjoonId}`} 
                target='_blank' rel='noreferrer'
                style={{width: "300px"}}
            >
                <img 
                    src={`http://mazassumnida.wtf/api/v2/generate_badge?boj=${backjoonId}`} 
                    alt={backjoonId} style={{width: "inherit", borderRadius: "0.7rem"}}
                />
            </a>
        </Box>    
    </Box>
};

export default Backjoon;