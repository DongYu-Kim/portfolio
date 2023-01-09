import { Box, Typography } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';


function Dream() {
    return <Box sx={{ display: "inline-block" }}>
        <Typography variant='h5' mt={0} mb={2} fontWeight='bold' style={{display: "flex", alignItems: "center"}}>
            <FlagIcon color='info' style={{verticalAlign: "middle", marginRight: "0.5rem"}} />Dream
        </Typography>
        <Typography variant='h7' mt={3} >
            <p>
            상상을 실현할 수 있는 SW 분야에 매력을 느꼈습니다.
            </p>
            <p>
            새로운 것을 배우고 적용하는 것이 재미있고, <br /> 
            지식을 공유하고 생각을 주고받는 것이 즐겁습니다.
            </p>
            <p>
            SW 개발로{'\u00a0'}
            <Typography variant='h7' fontWeight='bold' color={'#03a9f4'}> 
            더 멋진 세상
            </Typography>
            을 만들어 가고 싶습니다.
            </p>
        </Typography>
    </Box>
};

export default Dream;