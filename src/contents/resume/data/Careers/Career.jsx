import * as React from 'react';
import { Card, CardContent } from '@mui/material';
import Fade from 'react-reveal/Fade'


function Career({ name, period, contents }) {
    return <Fade>
        <Card sx={{ display: "inline-block", width: "345px", height: "270px", borderRadius: "0.7rem" }}>
            <CardContent>
                <h3 style={{ fontWeight: "bold", margin: "0" }}>{name}</h3>
                <p style={{ color: "gray", textAlign: "right", marginTop: "0" }}>{period}</p>
                {contents.map((content, id) => <li key={id}>
                    {content}
                </li>)}
            </CardContent>
        </Card>
    </Fade>
};

export default React.memo(Career);