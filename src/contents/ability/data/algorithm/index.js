import { Container, Grid, Box, Typography } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Backjoon from './backjoon';
import Swea from './swea';
import Programmers from './programmers';
import Pulse from 'react-reveal/Pulse';


function Algorithm() {

    return <Box>
        <h3 style={{display: "flex", alignItems: "center"}}><PsychologyIcon color='info' style={{verticalAlign: "middle", marginRight: "0.5rem"}} />Algorithm</h3>
        <Typography variant='h7' mt={3} >
            <Typography variant='h7' fontWeight='bold' color={'#03a9f4'}> 
                {"알고리즘을 깊이 있게 이해"}
            </Typography>
            {"하기 위해 "}
            <Typography variant='h7' fontWeight='bold' color={'#03a9f4'}> 
                {"C언어"}
            </Typography>
            {"로 풀고 있습니다."} <br/>
            {"모의 SW 역량 테스트 "}
            <Typography variant='h7' fontWeight='bold' color={'#03a9f4'}> 
                {"A+등급"}
            </Typography>
            {"을 취득했습니다."}
        </Typography>
        <Container>
            <Grid container>
                <Grid item>
                    <Pulse>
                        <Backjoon />
                    </Pulse>
                </Grid>    
                <Grid item>
                    <Pulse>
                        <Swea />
                    </Pulse>
                </Grid>    
                <Grid item>
                    <Pulse>
                        <Programmers />
                    </Pulse>
                </Grid>
            </Grid>
        </Container>
    </Box>
}

export default Algorithm;