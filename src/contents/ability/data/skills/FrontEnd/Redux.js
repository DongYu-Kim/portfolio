import { Card, CardContent, Box, Typography } from '@mui/material';
import SkillLevel from '../../../../../components/AppBar/SkillLevel';


function Redux({ detail }) {

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
                    <img src='images/icons/redux.png' alt='Redux' />
                </Box>
                <Typography variant='h6' marginLeft="0.5rem" fontSize="16px" fontWeight="bold">Redux.js</Typography>
            </Box>
            <SkillLevel level={3} />
        </CardContent>
        {detail&& <CardContent sx={{padding: "4px !important"}} >
            <Typography fontSize="12px" >dispatch, subscribe 등의 개념을 사용해 React 상태관리에 사용</Typography>
        </CardContent>}
    </Card>
};

export default Redux;