import { AppBar, Button, Toolbar } from '@mui/material';
import React from 'react';
import Copyright from "../../utils/Copyright";
import { useNavigate } from 'react-router-dom';

export default function BottomAppBar() {
    let navigate = useNavigate();
    return (
        <AppBar position='relative' color='transparent'  sx={{top: 'auto', bottom: 0, flexGrow: 1 }}>
            <Toolbar>
                <Copyright />
                <Button variant='contained' onClick={() => navigate(-1)} sx={{ marginLeft: 5 }} >Back</Button>
            </Toolbar>
        </AppBar>
    )
}
