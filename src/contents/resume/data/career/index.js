import { Container, Grid, Box, Typography } from '@mui/material';
import InsightsIcon from '@mui/icons-material/Insights';
import Coach from "./Coach";
import Ssafy from "./Ssafy";
import Universe from "./Universe";


function Career() {
    return <Box>
        <Typography variant='h5' mt={3} fontWeight='bold'> 
            <InsightsIcon color='info' style={{verticalAlign: "middle", marginRight: "0.5rem"}} />Career 
        </Typography>
        <Container>
            <Grid container spacing={4}>
                <Grid item>
                    <Coach />
                </Grid>
                <Grid item>
                    <Ssafy />
                </Grid>
                <Grid item>
                    <Universe />
                </Grid>            
            </Grid>
        </Container>
    </Box>
}

export default Career;