import * as React from 'react';
import { Container, Grid, Box, Typography, Switch, FormControlLabel } from '@mui/material';
import HandymanIcon from '@mui/icons-material/Handyman';
import Part from './Part';
import { parts } from './data';


function Skills() {
    const [showDetail, setShowDetail] = React.useState(true);

    function handleSwitch(e) {
        setShowDetail(e.target.checked);
    }

    return <Box>
        <Typography variant='h5' mt={3} fontWeight='bold'> 
            <HandymanIcon color='info' style={{verticalAlign: "middle", marginRight: "0.5rem"}} />Skills 
        </Typography>
        <Typography variant='h7' mt={3} > 
            <Typography variant='h7' fontWeight='bold' color={'#03a9f4'}> 
                새로운 기술에 도전
            </Typography>
            하는 것을 좋아합니다.
        </Typography>
        <Container>
            <Box sx={{display: "flex", justifyContent: "end", alignItems: "center"}}>
                <FormControlLabel control={<Switch checked={showDetail} onChange={handleSwitch} />} label="detail" />
            </Box>
            <Grid container spacing={1}>
                {parts.map((part, id) => <Part part={part} detail={showDetail} key={id}/>)}
            </Grid>
        </Container>
    </Box>
}

export default Skills;