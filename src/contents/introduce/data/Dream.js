import { Box, Typography } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';


function Dream() {
    return <Box sx={{ display: "inline-block" }}>
        <Typography variant='h5' mt={3} fontWeight='bold'>
            <FlagIcon color='info' style={{verticalAlign: "middle", marginRight: "0.5rem"}} />Dream
        </Typography>
        <Typography variant='h7' mt={3} >
            제가 가진 능력을 베푸는 것을 좋아합니다.<br />
            저의 열정이 사람들에게 동기부여가 되고 착한 영향을 미칠 수 있는<br />
            <Typography variant='h7' fontWeight='bold' color={'#03a9f4'}> 
            순수한 개발자
            </Typography>
            가 되고 싶습니다.
        </Typography>
    </Box>
};

export default Dream;