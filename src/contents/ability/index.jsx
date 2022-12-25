import * as React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Skills, Algorithm } from './data'
import { pages } from '../../data';

function Ability() {

    return <Container id={pages[1]} style={{scrollMarginTop: "100px"}}>
        <Typography variant='h4' mt={5} mb={3} fontWeight='bold'>
            {pages[1]}
        </Typography>
        <Container>
            <Box>
                <Skills />
            </Box>
            <Box>
                <Algorithm />
            </Box>
        </Container>
    </Container>
}

export default React.memo(Ability);