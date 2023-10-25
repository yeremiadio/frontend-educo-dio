import { Box, Typography } from '@mui/material'
import React from 'react'

export default function AssignmentsPerulangan() {
    return (
        <>
            <Typography variant='h4' fontFamily="serif">
                Assignments C++ - Perulangan.
            </Typography>
            <Typography variant='h7' fontStyle="italic" color="gray" gutterBottom>
                Date of Post Sample
            </Typography>
            <br />
            <br />
            <Typography variant='h6' align='justify'>
                <Box sx={{marginLeft: 4}}>
                    <iframe title='Perulangan' src="https://docs.google.com/forms/d/e/1FAIpQLSd2l8efGD3JGoQ-R4KqpoA3gvg9mPlDWbpPN4BRD_pgMQtq0w/viewform?embedded=true" width="1000" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </Box>
            </Typography>
        </>
    )
}
