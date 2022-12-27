import { Grid, Box, Typography } from '@mui/material';
import InsightsIcon from '@mui/icons-material/Insights';
import Coach from "./Coach";
import Ssafy from "./Ssafy";
import Universe from "./Universe";


function Career() {
    return <Box>
        <Typography variant='h5' mt={3} mb={1} fontWeight='bold' style={{display: "flex", alignItems: "center"}}> 
            <InsightsIcon color='info' style={{verticalAlign: "middle", marginRight: "0.5rem"}} />Career 
        </Typography>
        <Grid container spacing={1}>
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
    </Box>
}

export default Career;