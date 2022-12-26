import { Card, CardContent, Box, Typography } from '@mui/material';
import SkillLevel from '../../../../../components/AppBar/SkillLevel';


function Next({ detail }) {

    return <Card variant="outlined" style={{marginTop: "5px"}}>
        <CardContent style={{padding: "0", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <Box style={{display: "flex", alignItems: "center"}}>
                <Box 
                    style={{
                        width: "36px", height: "36px", 
                        backgroundColor: "gray", borderRadius: "3px",
                        display: "flex", justifyContent: "center", alignItems: "center"
                    }} 
                >
                    <img src='images/icons/next.png' alt='Next.js' />
                </Box>
                <Typography variant='h6' marginLeft="0.5rem">Next.js</Typography>
            </Box>
            <SkillLevel level={3} />
        </CardContent>
        {detail&& <CardContent sx={{padding: "0 !important"}} >
            <Typography fontSize="12px" >SSR을 적용한 웹페이지 제작</Typography>
        </CardContent>}
    </Card>
};

export default Next;