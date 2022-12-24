import * as React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeProvider, createTheme, IconButton } from "@mui/material";

function DarkModeButton({ mode, toggleMode }) {
    const modeTheme = createTheme({ palette: { mode } });

    return (
        <ThemeProvider theme={modeTheme}>
            <IconButton sx={{ ml: 1, color: 'text.primary' }} onClick={toggleMode} color="inherit">
                {mode === 'dark' ? <LightModeIcon fontSize="large" /> : <DarkModeIcon fontSize="large" />}
            </IconButton>
        </ThemeProvider>
    )
}

export default React.memo(DarkModeButton);