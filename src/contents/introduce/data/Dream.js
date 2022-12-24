import Box from '@mui/material/Box';

function Dream() {
    return <Box sx={{ display: "inline-block" }}>
        <h2>Dream</h2>
        <pre style={{ whiteSpace: "pre-wrap" }} >
{`제가 가진 능력을 베푸는 것을 좋아합니다.\n
저의 열정이 사람들에게 동기부여가 되고 착한 영향을 미칠 수 있는\n
`}
<span style={{ color: "#FFD400", fontWeight: "bold" }}>순수한 개발자</span>
{`가 되고 싶습니다.
`}
        </pre>
    </Box>
};

export default Dream;