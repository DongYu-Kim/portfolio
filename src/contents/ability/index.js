import * as React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Skills, Algorithm } from './data'
import { pages } from '../../data';

function Ability() {

    return <Container id={pages[0]} style={{scrollMarginTop: "100px"}}>
        <Typography variant='h4' mt={5} mb={3} fontWeight='bold'>
            {pages[0]}
        </Typography>
        <Container>
            <Box>
                <Algorithm />
            </Box>
            <Box>
                <Skills />
            </Box>
        </Container>
    </Container>
}

export default React.memo(Ability);