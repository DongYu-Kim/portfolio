import * as React from 'react';
import { Box, Grid } from '@mui/material';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';


function SkillLevel({level}) {
    const array = [0, 1, 2, 3, 4];
    if(level < 0) level = 0;
    if(level > 5) level = 5;

    return <Box>
        <Grid container spacing={0} marginRight="6px">
            {array.map(num => <Grid key={num} item color={num<level?"#FFD400":"gray"} height="20px">
                <SquareRoundedIcon fontSize='small' />
            </Grid>)}
        </Grid>
    </Box>
}

export default React.memo(SkillLevel);