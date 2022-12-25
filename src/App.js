import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createTheme, Container, Box, useScrollTrigger, Slide } from "@mui/material";
import ResponsiveAppBar from './components/AppBar';
import Introduce from './contents/introduce';
import Resume from './contents/resume';

let _mode = localStorage.getItem("mode");
!_mode&& (_mode = "dark");

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

function App() {
    const [mode, setMode] = React.useState(_mode);

    const modeTheme = createTheme({ palette: { mode } });

    const toggleMode = () => {
        const _mode = mode==="dark"?"light":"dark";
        setMode(_mode);
        localStorage.setItem("mode", _mode);
    }
    
    return (
        <ThemeProvider theme={modeTheme}>
            <Box
                sx={{
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    width: '100%',
                    height: '100%',
                    minHeight: '100vh',
                }}
            >
                <ResponsiveAppBar mode={mode} toggleMode={toggleMode} />
                <Box height="70px" />
                <Container>
                    <Introduce />
                    <Resume />
                </Container>
                <Box height="1200px" />
            </Box>
        </ThemeProvider>
    );
}

export default App;
