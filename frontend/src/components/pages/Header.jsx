import { memo } from "react";
import { useHistory } from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = memo(() => {
    const history = useHistory();
    const toLogIn = () => {
        history.push("/auth");
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="center">
                Reciper
            </Typography>
            <Button color="inherit" onClick={toLogIn}>ログイン</Button>
            </Toolbar>
        </AppBar>
        </Box>
    );
});