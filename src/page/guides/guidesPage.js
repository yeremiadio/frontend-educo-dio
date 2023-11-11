import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../utils/ThemeProvider'
import { Container, Typography } from '@mui/material'
import BottomAppBar from '../../components/Navbar/BottomAppBar'

export default function guidesPage() {
    return (
        <div className='main'>
            <div className='content'>
                <ThemeProvider theme={theme}>
                    <Container component={"main"} maxWidth="md" sx={{ pt: 5, pb: 6 }}>
                        <Typography variant="h2" textAlign={'center'} sx={{ fontFamily: 'fantasy' }} gutterBottom>Guide Page's</Typography>
                        <iframe 
                            title='Sign Up and Sign In'
                            src="https://scribehow.com/embed/Step-by-step_guide_of_a_EDUCO_users__UwN5IhoRQ8a64RxQfdcL4A" 
                            width="100%" 
                            height="500" 
                            allowfullscreen 
                            frameborder="10"></iframe>
                    </Container>
                </ThemeProvider>
            </div>
            <BottomAppBar/>
        </div>
    )
}
