import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


function Contact() {
    return <Box sx={{ display: "inline-block" }}>
        <h3>Contact</h3>
        <a
            href='mailto:ehddb2252@gmail.com' target='_blank' rel='noreferrer'
            style={{marginRight: "1rem", textDecoration: "none", color: "inherit"}}
        >
            <EmailIcon style={{verticalAlign: "middle"}}/>
            <span style={{marginLeft: "0.5rem"}}>Email</span>
        </a>
        <a
            href='https://github.com/DongYu-Kim' target='_blank' rel='noreferrer'
            style={{marginRight: "1rem", textDecoration: "none", color: "inherit"}}
        >
            <GitHubIcon style={{verticalAlign: "middle"}}/>
            <span style={{marginLeft: "0.5rem"}}>GitHub</span>
        </a>
        <a
            href='https://velog.io/@dongyu' target='_blank' rel='noreferrer'
            style={{marginRight: "1rem", textDecoration: "none", color: "inherit"}}
        >
            <LibraryBooksIcon style={{verticalAlign: "middle"}}/>
            <span style={{marginLeft: "0.5rem"}}>Blog</span>
        </a>
    </Box>
};

export default Contact;