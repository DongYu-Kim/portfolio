import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PhoneIcon from '@mui/icons-material/Phone';
import Tada from 'react-reveal/Tada';


function Contact() {
    return <Box sx={{ display: "inline-block" }}>
        <h3 style={{display: "flex", alignItems: "center"}}><PhoneIcon color='info' style={{verticalAlign: "middle", marginRight: "0.5rem"}} />Contact</h3>
        <a
            href='mailto:ehddb2252@gmail.com' target='_blank' rel='noreferrer'
            style={{marginRight: "1rem", textDecoration: "none", color: "inherit"}}
        >
            <Tada>
                <div style={{display: "inline-block"}}>
                    <EmailIcon style={{verticalAlign: "middle"}}/>
                    <div style={{display: "inline-block", marginLeft: "0.5rem"}}>Email</div>
                </div>
            </Tada>
        </a>
        <a
            href='https://github.com/DongYu-Kim' target='_blank' rel='noreferrer'
            style={{marginRight: "1rem", textDecoration: "none", color: "inherit"}}
        >
            <Tada>
                <div style={{display: "inline-block"}}>
                    <GitHubIcon style={{verticalAlign: "middle"}}/>
                    <div style={{display: "inline-block", marginLeft: "0.5rem"}}>GitHub</div>
                </div>
            </Tada>
        </a>
        <a
            href='https://velog.io/@dongyu' target='_blank' rel='noreferrer'
            style={{marginRight: "1rem", textDecoration: "none", color: "inherit"}}
        >
            <Tada>
                <div style={{display: "inline-block"}}>
                    <LibraryBooksIcon style={{verticalAlign: "middle"}}/>
                    <div style={{display: "inline-block", marginLeft: "0.5rem"}}>Blog</div>
                </div>
            </Tada>
        </a>
    </Box>
};

export default Contact;