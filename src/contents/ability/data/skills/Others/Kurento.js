import { Card, CardContent, Box, Typography } from '@mui/material';
import SkillLevel from '../../../../../components/AppBar/SkillLevel';


function Kurento({ detail }) {

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
                    <img src='images/icons/kurento.png' alt='Kurento' />
                </Box>
                <Typography variant='h6' marginLeft="0.5rem">Kurento</Typography>
            </Box>
            <SkillLevel level={3} />
        </CardContent>
        {detail&& <CardContent sx={{padding: "0 !important"}} >
            <Typography fontSize="12px" >WebRTC의 이해와 웹페이지 적용</Typography>
        </CardContent>}
    </Card>
};

export default Kurento;