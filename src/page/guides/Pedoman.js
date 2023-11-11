import React from 'react'
import TopAppBar from '../../components/Navbar/TopAppBar'
import BottomAppBar from '../../components/Navbar/BottomAppBar'
import { Container, ThemeProvider, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { theme } from '../../utils/ThemeProvider';

export default function Pedoman() {

    const { user: currentUser } = useSelector((state) => state.auth);

    return (
        <ThemeProvider theme={theme}>
            <TopAppBar/>
            <div className='content' >
                <Container component={"main"} maxWidth="md" sx={{ pt: 5, pb: 6 }}>
                    <Typography variant="h2" textAlign={'center'} sx={{ fontFamily: 'fantasy' }} gutterBottom>Guide for User's</Typography>
                    {currentUser && !currentUser.roles.includes("ROLE_SISWA") ? (
                        <>
                        <Typography variant="h4" textAlign={'center'} sx={{ fontFamily: 'fantasy' }} gutterBottom>Guide of Guru</Typography>
                        <iframe 
                            title='Guide of Guru'
                            src="https://scribehow.com/embed/Step-by-step_guide_Navigating_and_Using_a_Coding_Education_Platform_for_Guru__1f_vMTOGTea7ehr7mVOblw"
                            width="100%" 
                            height="500" 
                            allowfullscreen 
                            frameborder="10"></iframe>
                        </>
                    ):(
                        <>
                        <Typography variant="h4" textAlign={'center'} sx={{ fontFamily: 'fantasy' }} gutterBottom>Guide of Siswa</Typography>
                        <iframe 
                            title='Guide of Siswa'
                            src="https://scribehow.com/embed/A_Step-by-Step_Guide_to_Navigating_and_Using_EDUCO_for_Siswa__4RKkih7XTMGl-B6bBuASFQ" 
                            width="100%" 
                            height="500" 
                            allowfullscreen 
                            frameborder="10"></iframe>
                        </>
                    )}
                </Container>
            </div>
            <BottomAppBar/>
        </ThemeProvider>
    )
}
