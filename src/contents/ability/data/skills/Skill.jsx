import * as React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import SkillLevel from '../../../../components/AppBar/SkillLevel';

function Skill({ name, imgUrl, contents, level, detail }) {
    return <Card 
        variant="outlined" 
        style={{marginTop: "5px", borderRadius: "0.7rem", padding: "0.7rem"}}
    >
        <CardContent style={{padding: "0", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <Box style={{display: "flex", alignItems: "center"}}>
                <Box 
                    style={{
                        width: "36px", height: "36px", 
                        backgroundColor: "white", borderRadius: "2rem",
                        display: "flex", justifyContent: "center", alignItems: "center"
                    }} 
                >
                    <img src={imgUrl} alt={name} />
                </Box>
                <Typography variant='h6' marginLeft="0.5rem" fontSize="14px" fontWeight="bold">{name}</Typography>
            </Box>
            <SkillLevel level={level} />
        </CardContent>
        {detail&& <CardContent sx={{padding: "0.7rem 0 0 0 !important"}} >
            {contents.map((content, id) => <Typography fontSize="14px" key={id}>
                {content}
            </Typography>)}
        </CardContent>}
    </Card>
};

export default React.memo(Skill);