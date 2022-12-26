import { Box } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';


function Certificate() {

    return <Box>
        <h3><TaskIcon color='info' style={{verticalAlign: "middle", marginRight: "0.5rem"}} />Certificate</h3>
        <li>컴퓨터활용능력 1급 <span style={{color: "gray", fontWeight: "normal"}}>(2021.02.05, 대한상공회의소)</span></li>
        <li>SQL 개발자 <span style={{color: "gray", fontWeight: "normal"}}>(2021.10.01, 한국데이터산업진흥원)</span></li>
    </Box>
};

export default Certificate;