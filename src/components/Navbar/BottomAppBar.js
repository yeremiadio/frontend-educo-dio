import { AppBar, Button, Toolbar } from '@mui/material';
import React from 'react';
import Copyright from "../../utils/Copyright";
import { useNavigate } from 'react-router-dom';

export default function BottomAppBar() {
    let navigate = useNavigate();
    return (
        <AppBar position='relative'  sx={{top: 'auto', bottom: 0 }}>
            <Toolbar>
                <Copyright />
                <Button variant='contained' onClick={() => navigate(-1)} >Back</Button>
            </Toolbar>
        </AppBar>
    )
}
