import { Box, Typography } from '@mui/material'
import React from 'react'

export default function FullTutorial() {
    return (
        <>
            <Typography variant='h4' fontFamily="serif">
                Materi C++ - Full Tutorial.
            </Typography>
            <Typography variant='h7' fontStyle="italic" color="gray" gutterBottom>
                Date of Post Sample
            </Typography>
            <br />
            <br />
            <Typography variant='h6' align='justify'>
                <Box sx={{marginLeft: 4}}>
                <iframe width="1000" height="500" src="https://www.youtube.com/embed/videoseries?si=fK7BkFH4EgOHfuX_&amp;list=PLZS-MHyEIRo4Ze0bbGB1WKBSNMPzi-eWI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Box>
            </Typography>
        </>
    )
}