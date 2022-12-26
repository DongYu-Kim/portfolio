import { Card, CardContent, Box, Typography } from '@mui/material';
import SkillLevel from '../../../../../components/AppBar/SkillLevel';


function Tensorflow({ detail }) {

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
                    <img src='images/icons/tensorflow.png' alt='Tensorflow' />
                </Box>
                <Typography variant='h6' marginLeft="0.5rem" fontSize="16px" fontWeight="bold">Tensorflow</Typography>
            </Box>
            <SkillLevel level={2} />
        </CardContent>
        {detail&& <CardContent sx={{padding: "4px !important"}} >
            <Typography fontSize="12px" >머신러닝의 이해와 KoBERT 모델 사용</Typography>
        </CardContent>}
    </Card>
};

export default Tensorflow;