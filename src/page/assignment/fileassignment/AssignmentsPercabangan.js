import { Box, Typography } from '@mui/material'
import React from 'react'

export default function AssignmentsPercabangan() {
    return (
        <>
            <Typography variant='h4' fontFamily="serif">
                Assignments C++ - Percabangan.
            </Typography>
            <Typography variant='h7' fontStyle="italic" color="gray" gutterBottom>
                Date of Post Sample
            </Typography>
            <br />
            <br />
            <Typography variant='h6' align='justify'>
                <Box sx={{marginLeft: 4}}>
                    <iframe title='Percabangan' src="https://docs.google.com/forms/d/e/1FAIpQLSfOP2Qd4DDwGImipKxIC7wS4tDdTfMlycur3Gy-UczTlB0lew/viewform?embedded=true" width="1000" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </Box>
            </Typography>
        </>
    )
}
