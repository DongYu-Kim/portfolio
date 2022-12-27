import { Grid, Box, Typography } from '@mui/material';
import InsightsIcon from '@mui/icons-material/Insights';
import { careers } from './data';
import Career from './Career';


function Careers() {
    return <Box>
        <Typography variant='h5' mt={3} mb={1} fontWeight='bold' style={{display: "flex", alignItems: "center"}}> 
            <InsightsIcon color='info' style={{verticalAlign: "middle", marginRight: "0.5rem"}} />Career 
        </Typography>
        <Grid container spacing={1}>
            {careers.map((career, id) => <Grid item>
                <Career 
                    name={career.name}
                    period={career.period}
                    contents={career.contents} 
                />
            </Grid>)}         
        </Grid>
    </Box>
}

export default Careers;