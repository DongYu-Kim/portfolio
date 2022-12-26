import { Card, CardContent, Box, Typography } from '@mui/material';
import SkillLevel from '../../../../../components/AppBar/SkillLevel';


function Unity({ detail }) {

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
                    <img src='images/icons/unity.png' alt='Unity' />
                </Box>
                <Typography variant='h6' marginLeft="0.5rem" fontSize="16px" fontWeight="bold">Unity</Typography>
            </Box>
            <SkillLevel level={4} />
        </CardContent>
        {detail&& <CardContent sx={{padding: "4px !important"}} >
            <Typography fontSize="12px" >Photon Cloud, 소켓 통신 적용<br/>오브젝트와 카메라 엔진 개발</Typography>
        </CardContent>}
    </Card>
};

export default Unity;