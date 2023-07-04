import { Button } from '@mui/material';
import React from 'react';

function Buttons(props) {
    return (
        <Button
            type={props.type}
            variant={props.variant}
            fullWidth={props.fullWidth}
            sx={{ mt: 3, mb: 2 }}
            onClick={props.onClick}
        >
            {props.label}
        </Button>
        
    )
}

export default Buttons