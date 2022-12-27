import * as React from 'react';
import { Container, Typography } from '@mui/material';
import Project from './Project';
import { pages } from '../../data';
import { projects } from './data';

function Projects() {

    return <Container id={pages[2]} style={{scrollMarginTop: "100px"}}>
        <Typography variant='h4' mt={5} mb={3} fontWeight='bold'>
            {pages[2]}
        </Typography>
        <Container>
            {projects.map((pjt, id) => <Project key={id} 
                name={pjt.name}
                period={pjt.period}
                description={pjt.description}
                videoUrl={pjt.videoUrl}
                skills={pjt.skills}
                mainFuncs={pjt.mainFuncs}
                roles={pjt.roles}
                results={pjt.results}
            />)}
        </Container>
    </Container>
}

export default React.memo(Projects);