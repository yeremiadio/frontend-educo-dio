import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Copyright from "../../utils/Copyright";
import { useNavigate } from 'react-router-dom';

export default function BottomAppBar() {
    let navigate = useNavigate();
    return (
        <AppBar position='relative'  sx={{top: 'auto', bottom: 0 }}>
            <Toolbar>
                <Typography variant="h6" noWrap sx={{flexGrow: 1}}>Education Coding.</Typography>
                <Button variant='contained' sx={{marginRight: 5 }} onClick={() => navigate(-1)}>Back</Button>
                <Copyright />
                
            </Toolbar>
        </AppBar>
    )
}
