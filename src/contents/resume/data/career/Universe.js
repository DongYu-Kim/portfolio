import { Card, CardContent } from '@mui/material';

function Universe() {
    return <Card sx={{ display: "inline-block", width: "330px", height: "300px" }}>
        <CardContent>
            <h3 style={{ fontWeight: "normal" }}>고려대학교 기계공학 학사 졸업</h3>
            <p style={{ color: "gray", textAlign: "right" }}>2014.03.01 ~ 2020.08.25</p>
            <li>3.81(전공3.99) / 4.5</li>
            <li>2번의 설계 프로젝트 진행</li>
            <li>Creo, NX, Matlab, HyperMesh, Adams, AVR, C 프로그램 실습</li>
        </CardContent>
    </Card>
};

export default Universe;