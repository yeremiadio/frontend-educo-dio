import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import Copyright from "../../utils/Copyright";

export default function BottomAppBar() {
    return (
        <AppBar position='relative' color='transparent' sx={{top: 'auto', bottom: 0 }}>
            <Toolbar>
                <Copyright/>
            </Toolbar>
        </AppBar>
    )
}
