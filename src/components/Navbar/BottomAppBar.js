import { AppBar, Button, ThemeProvider, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Copyright from "../../utils/Copyright";
import { useNavigate } from 'react-router-dom';
import { theme } from '../../utils/ThemeProvider';

export default function BottomAppBar() {
    let navigate = useNavigate();
    return (
        <ThemeProvider theme={theme}>
            <AppBar position='relative'  sx={{top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <Typography variant="h5" noWrap sx={{flexGrow: 1}} fontFamily={'fantasy'}>Education Coding.</Typography>
                    <Button variant='contained' sx={{marginRight: 5 }} onClick={() => navigate(-1)}>Back</Button>
                    <Copyright />
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}
