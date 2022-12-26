import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeButton from './DarkModeButton';
import { name, pages, show } from '../../data';


function ResponsiveAppBar({mode, toggleMode}) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" color='' enableColorOnDark>
            <Container maxWidth="false">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="./"
                        sx={{
                            mr: 2,
                            display: show.big,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img 
                            src='images/iconimage.png' alt='Icon'
                            height='32px' style={{marginRight: '1rem'}}
                        />
                        {name}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: show.small }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: show.small,
                            }}
                        >
                        {pages.map((page) => (
                            <a key={page} href={`./#${page}`} style={{textDecoration: "none", color: "inherit"}}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" fontWeight="bold" >{page}</Typography>
                                </MenuItem>
                            </a>
                        ))}
                        </Menu>
                    </Box>

                    
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="./"
                        sx={{
                            mr: 2,
                            display: show.small,
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img 
                            src='images/iconimage.png' alt='Icon'
                            height='32px' style={{marginRight: '1rem'}}
                        />
                        {name}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: show.big, justifyContent: 'center' }}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'inherit', display: 'block', fontWeight: "bold" }}
                            href={`./#${page}`}
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <DarkModeButton mode={mode} toggleMode={toggleMode} />       
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default React.memo(ResponsiveAppBar);