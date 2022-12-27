import * as React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { Careers, Awards, Certificate } from './data';
import { pages } from '../../data';
import Fade from 'react-reveal/Fade';


function Resume() {

    return <Container id={pages[0]} style={{scrollMarginTop: "100px"}}>
        <Typography variant='h4' mt={5} mb={3} fontWeight='bold'>
            {pages[0]}
        </Typography>
        <Container>
            <Box>
                <Careers />
            </Box>
            <Box>
                <Grid container spacing={12}>
                    <Grid item>
                        <Fade right>
                            <Awards />
                        </Fade>
                    </Grid>
                    <Grid item>
                        <Fade right>
                            <Certificate />
                        </Fade>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </Container>
}

export default React.memo(Resume); 