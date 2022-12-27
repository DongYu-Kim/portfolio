import * as React from 'react';
import { Card, CardContent } from '@mui/material';

function Career({ name, period, contents }) {
    return <Card sx={{ display: "inline-block", width: "345px", height: "270px", borderRadius: "0.7rem" }}>
        <CardContent>
            <h3 style={{ fontWeight: "bold", margin: "0" }}>{name}</h3>
            <p style={{ color: "gray", textAlign: "right", marginTop: "0" }}>{period}</p>
            {contents.map((content, id) => <li key={id}>
                {content}
            </li>)}
        </CardContent>
    </Card>
};

export default React.memo(Career);