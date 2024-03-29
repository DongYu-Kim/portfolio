import * as React from 'react';
import { Grid, Box, Typography, Card, CardMedia, Chip, CardContent } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import TaskIcon from '@mui/icons-material/Task';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


function Project({ name, period, description, videoUrl, skills, mainFuncs, roles, results }) {

    return <Box marginBottom={4}>
        <Typography variant='h5' mt={3} mb={0} fontWeight='bold'> 
            {name}
        </Typography>
        <Box marginLeft="1rem">
            <Slide bottom>
                <p style={{ color: "gray", marginBottom: "0" }}>{period}</p>
                <Typography variant='h7' mt={3} fontWeight="bold">
                    {description}
                </Typography>
            </Slide>
            <Grid container spacing={3}>
                <Grid item>
                    <Slide bottom>
                        <Fade>
                            <Card 
                                sx={{
                                    margin: "1rem 0 0.5rem 0", 
                                    maxWidth: "560px", maxHeight:"315px"
                                }}
                            >
                                <CardMedia
                                    component="video"
                                    width="100%" height="100%"
                                    src={videoUrl}
                                    autoPlay muted loop
                                />
                            </Card>
                        </Fade>
                        <Box>
                            {skills.map((skill, id) => <Chip key={id}
                                label={skill} size="small" 
                                style={{fontWeight: "bold", marginRight: "4px"}}
                            />)}
                        </Box>
                        </Slide>
                </Grid>
                <Grid item>
                    <Slide right>
                        <Card variant="outlined" sx={{maxWidth: "450px", borderRadius: "0.7rem", borderWidth: 0}}>
                            <CardContent>
                                <Box>
                                    <Typography variant='h6' fontWeight="bold" style={{display: "flex", alignItems: "center"}}>
                                        <AppsIcon color='info' style={{verticalAlign: "middle", marginRight: "0.5rem"}} />
                                        주요 기능
                                    </Typography>
                                    {mainFuncs.map((mainFunc, id) => <li key={id}
                                        style={{marginLeft: "2rem", fontSize: "14px"}}
                                    >
                                        {mainFunc}
                                    </li>)}
                                </Box>
                                <Box>
                                    <Typography variant='h6' fontWeight="bold" style={{display: "flex", alignItems: "center"}}>
                                        <TaskIcon color='info' style={{verticalAlign: "middle", marginRight: "0.5rem"}} />
                                        담당 역할
                                    </Typography>
                                    {roles.map((role, id) => <li key={id}
                                        style={{marginLeft: "2rem", fontSize: "14px"}}
                                    >
                                        {role}
                                    </li>)}
                                </Box>
                                <Box>
                                    <Typography variant='h6' fontSize="1.4rem" fontWeight="bold" mt={2} style={{display: "flex", alignItems: "center"}}>
                                        <AutoAwesomeIcon color='info' style={{verticalAlign: "middle", marginRight: "0.5rem"}} />
                                        성과 및 배운점
                                    </Typography>
                                    {results.map((result, id) => <li key={id} 
                                        style={{marginLeft: "2rem", fontSize: "16px"}}
                                    >
                                        {result}
                                    </li>)}
                                </Box>
                            </CardContent>
                        </Card>
                    </Slide>
                </Grid>
            </Grid>
        </Box>
    </Box>
};

export default React.memo(Project);