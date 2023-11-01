// Popup.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

function Popup({ open, onClose }) {
    return (
        <Dialog open={open} onClose={onClose}>
        <DialogTitle variant='h4' fontFamily={'serif'}>Code Saved</DialogTitle>
        <DialogContent sx={{fontFamily: 'fantasy'}}>
            <p>Your code has been saved successfully.</p>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} color="primary">
            Close
            </Button>
        </DialogActions>
        </Dialog>
    );
}

export default Popup;
