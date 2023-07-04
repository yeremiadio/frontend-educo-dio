import * as React from 'react';
import Box from '@mui/material/Box';

export default function bull () {
    return <Box
        component={"span"}
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    •
    </Box>
  }