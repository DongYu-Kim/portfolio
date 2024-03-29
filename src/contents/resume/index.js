import * as React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { Careers, Awards, Certificate } from './data';
import { pages } from '../../data';


function Resume() {

    return <Container id={pages[1]} style={{scrollMarginTop: "100px"}}>
        <Typography variant='h4' mt={5} mb={3} fontWeight='bold'>
            {pages[1]}
        </Typography>
        <Container>
            <Box>
                <Careers />
            </Box>
            <Box>
                <Grid container spacing={12}>
                    <Grid item>
                        <Awards />
                    </Grid>
                    <Grid item>
                        <Certificate />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </Container>
}

export default React.memo(Resume); 