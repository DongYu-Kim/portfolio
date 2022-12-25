import { Box } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


function Awards() {

    return <Box>
        <h3><EmojiEventsIcon color='info' style={{verticalAlign: "middle", marginRight: "1rem"}} />Awards</h3>
        <li>성적우수상 <span style={{color: "gray"}}>(2021.11.26, 삼성전자주식회사)</span></li>
        <p style={{margin: "0"}}>삼성 청년 SW 아카데미 1학기 광주2반 종합성적 1등</p>
        <li>우수상 <span style={{color: "gray"}}>(2022.02.18, 삼성전자주식회사)</span></li>
        <p style={{margin: "0"}}>2학기 공통 프로젝트(트랙: 웹기술) 광주2반 1등</p>
        <li>우수상 <span style={{color: "gray"}}>(2022.04.08, 삼성전자주식회사)</span></li>
        <p style={{margin: "0"}}>삼성전자 MX사업부 연계 프로젝트 1등</p>
        <li>우수상 <span style={{color: "gray"}}>(2022.05.27, 삼성전자주식회사)</span></li>
        <p style={{margin: "0"}}>2학기 자율 프로젝트 광주2반 1등</p>
        <li>우수상 <span style={{color: "gray"}}>(2022.05.31, 삼성전자주식회사)</span></li>
        <p style={{margin: "0"}}>자율 프로젝트 결선발표회 입상</p>
        <li>최우수상 <span style={{color: "gray"}}>(2022.06.15, 삼성전자 한종희 부회장)</span></li>
        <p style={{margin: "0"}}>삼성 청년 SW 아카데미 교육과정 우수한 성적으로 수료</p>
    </Box>
};

export default Awards;