import { Container, Grid, Box, Typography } from '@mui/material';
import HandymanIcon from '@mui/icons-material/Handyman';
import Language from './Language';
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';
import Others from './Others';

function Skills() {

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
            <Grid container spacing={1}>
                <Grid item>
                    <Language />
                </Grid>
                <Grid item>
                    <FrontEnd />
                </Grid>
                <Grid item>
                    <BackEnd />
                </Grid>
                <Grid item>
                    <Others />
                </Grid>
            </Grid>
        </Container>
    </Box>
}

export default Skills;