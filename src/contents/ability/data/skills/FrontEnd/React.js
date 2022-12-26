import { Card, CardContent, Box, Typography } from '@mui/material';
import SkillLevel from '../../../../../components/AppBar/SkillLevel';


function React({ detail }) {

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
                    <img src='images/icons/react.png' alt='React' />
                </Box>
                <Typography variant='h6' marginLeft="0.5rem" fontSize="16px" fontWeight="bold">React.js</Typography>
            </Box>
            <SkillLevel level={4} />
        </CardContent>
        {detail&& <CardContent sx={{padding: "4px !important"}} >
            <Typography fontSize="12px" >다양한 라이브러리를 사용해 빠르게 웹 페이지 제작</Typography>
        </CardContent>}
    </Card>
};

export default React;