import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { skills } from './data';
import Skill from './Skill';

function Part({ part, detail }) {
    return <Grid item>
        <Box sx={{display: "inline-block", width: "245px"}}>
        <Typography variant='h6' textAlign="center" fontWeight="bold" >{part}</Typography>
        {skills[part].map((skill, id) => <Skill 
            key={id}
            name={skill.name} 
            imgUrl={skill.imgUrl} 
            contents={skill.contents} 
            level={skill.level} 
            detail={detail}
        />)}
        </Box>
    </Grid>
};

export default React.memo(Part);