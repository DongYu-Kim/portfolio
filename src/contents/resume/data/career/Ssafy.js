import Box from '@mui/material/Box';

function Ssafy() {
    return <Box sx={{ display: "inline-block", width: "310px" }}>
        <h3 style={{ fontWeight: "normal" }}>삼성 청년 SW 아카데미 6기 수료</h3>
        <p style={{ color: "gray", textAlign: "right" }}>2021.07.07 ~ 2022.06.30</p>
        <li>Python을 사용해, 자료 구조와 알고리즘 학습</li>
        <li>HTML, CSS, Javascript과 웹 개념 이해</li>
        <li>Django, Vue 학습과 서버 클라이언트 모델 제작</li>
        <li>gamification을 적용한 알고리즘 대회</li>
        <li>WebRTC 기술, 머신러닝 학습과 3번의 프로젝트 진행</li>
    </Box>
};

export default Ssafy;