import * as React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { name, Dream, Contact, Image } from './data';


function Introduce() {

    return <Container>
        <Typography variant='h4' mt={5} mb={3} fontWeight='bold'> 
            {name} 
        </Typography>
        <Container>
            <Grid container spacing={4}>
                <Grid item>
                    <Image />
                </Grid>
                <Grid item>
                    <Box>
                        <Dream />
                    </Box>
                    <Box>
                        <Contact />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Container>
};

export default React.memo(Introduce); 