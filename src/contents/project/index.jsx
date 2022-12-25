import * as React from 'react';
import { Container, Typography } from '@mui/material';
import { pages } from '../../data';

function Project() {

    return <Container id={pages[2]} style={{scrollMarginTop: "100px"}}>
        <Typography variant='h4' mt={5} mb={3} fontWeight='bold'>
            {pages[2]}
        </Typography>
    </Container>
}

export default React.memo(Project);