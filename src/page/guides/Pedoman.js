import React, { useEffect, useState } from 'react'
import TopAppBar from '../../components/Navbar/TopAppBar'
import BottomAppBar from '../../components/Navbar/BottomAppBar'
import { Container, ThemeProvider, Typography } from '@mui/material'
import { theme } from '../../utils/ThemeProvider';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axiosInstance from '../../config/axiosInstance';

export default function Pedoman() {
    const [userInfo, setUserInfo] = useState(null);
    // Menggunakan localStorage untuk mendapatkan token akses
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                if (accessToken) {
                    // Mendekode token akses untuk mendapatkan informasi pengguna
                    const decodedToken = jwtDecode(accessToken);
                    const userId = decodedToken.id;

                    // Mendapatkan informasi pengguna berdasarkan ID pengguna yang login
                    const response = await axiosInstance.get(`/api/users/${userId}`, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    });
                    
                    setUserInfo(response.data.user);
                }
            } catch (error) {
                console.error('Error fetching user information:', error);
            }
        };

        fetchUserInfo();
    }, [accessToken]);

    if (!accessToken) {
        return <Navigate to="/login" />;
    }

    return (
        <ThemeProvider theme={theme}>
            <TopAppBar/>
            {userInfo && (
            <div className='content' >
                <Container component={"main"} maxWidth="md" sx={{ pt: 5, pb: 6 }}>
                    <Typography variant="h2" textAlign={'center'} sx={{ fontFamily: 'fantasy' }} gutterBottom>Guide for User's</Typography>
                    {userInfo.roleId && userInfo.roleId === ('1') ? (
                        <>
                        <Typography variant="h4" textAlign={'center'} sx={{ fontFamily: 'fantasy' }} gutterBottom>Guide of Guru</Typography>
                        <iframe 
                            title='Guide of Siswa'
                            src="https://scribehow.com/embed/A_Step-by-Step_Guide_to_Navigating_and_Using_EDUCO_for_Siswa__4RKkih7XTMGl-B6bBuASFQ" 
                            width="100%" 
                            height="500" 
                            allowfullscreen 
                            frameborder="10"></iframe>
                        </>
                    ):(
                        <>
                        <Typography variant="h4" textAlign={'center'} sx={{ fontFamily: 'fantasy' }} gutterBottom>Guide of Siswa</Typography>
                        <iframe 
                            title='Guide of Guru'
                            src="https://scribehow.com/embed/Step-by-step_guide_Navigating_and_Using_a_Coding_Education_Platform_for_Guru__1f_vMTOGTea7ehr7mVOblw"
                            width="100%" 
                            height="500" 
                            allowfullscreen 
                            frameborder="10"></iframe>
                        </>
                    )}
                </Container>
            </div>
            )}
            <BottomAppBar/>
        </ThemeProvider>
    )
}
