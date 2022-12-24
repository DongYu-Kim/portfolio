import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { name, Dream, Contact, Image } from './data';
import { Grid } from '@mui/material';

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