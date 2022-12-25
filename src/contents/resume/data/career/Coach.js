import { Card, CardContent } from '@mui/material';

function Coach() {
    return <Card sx={{ display: "inline-block", width: "340px", height: "300px" }}>
        <CardContent>
            <h3 style={{ fontWeight: "normal" }}>삼성 청년 SW 아카데미 7기 실습코치</h3>
            <p style={{ color: "gray", textAlign: "right" }}>2022.06.28 ~ 2022.11.30</p>
            <li>2학기 프로젝트 관리 및 코칭</li>
            <li>이전 우수 프로젝트 오픈소스화 및 유지보수</li>
            <li>메타버스 캠퍼스 구축을 위한 플랫폼 조사</li>
            <li>교육생 고민 상담 및 동기 부여</li>
            <li>콘텐츠 발표 및 지식 공유</li>
        </CardContent>
    </Card>
};

export default Coach;