import { Card, CardContent, Box, Typography } from '@mui/material';
import SkillLevel from '../../../../../components/AppBar/SkillLevel';


function Python() {

    return <Card variant="outlined" style={{marginTop: "5px"}}>
        <CardContent style={{padding: "0", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <Box style={{display: "flex", alignItems: "center"}}>
                <Box style={{width: "36px", height: "36px", backgroundColor: "gray", display: "flex", justifyContent: "center", alignItems: "center"}} >
                    <img src='images/icons/Python.png' alt='Python' />
                </Box>
                <Typography variant='h6' marginLeft="0.5rem">Python</Typography>
            </Box>
            <SkillLevel level={4} />
        </CardContent>
    </Card>
};

export default Python;