import { Card, CardContent, Box, Typography } from '@mui/material';
import SkillLevel from '../../../../../components/AppBar/SkillLevel';


function Java({ detail }) {

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
                    <img src='images/icons/java.png' alt='Java' />
                </Box>
                <Typography variant='h6' marginLeft="0.5rem">Java</Typography>
            </Box>
            <SkillLevel level={3} />
        </CardContent>
        {detail&& <CardContent sx={{padding: "0 !important"}} >
            <Typography fontSize="12px" >컬렉션, 스레드, 인터페이스 등을 사용</Typography>
        </CardContent>}
    </Card>
};

export default Java;