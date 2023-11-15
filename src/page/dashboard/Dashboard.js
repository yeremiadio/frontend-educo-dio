import { Card, CardContent, CardHeader, CardMedia, Container, Divider, Grid, ThemeProvider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { theme } from "../../utils/ThemeProvider";
import { WavingHand } from '@mui/icons-material';
import TopAppBar from '../../components/Navbar/TopAppBar';
import { dataDashboard } from '../../utils/DataDashboard';
import BottomAppBar from '../../components/Navbar/BottomAppBar';
import DashboardAssignments from '../../components/Table/DashboardAssignments';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axiosInstance from '../../config/axiosInstance';

export default function Dashboard() {
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
        <div className='content'>
        <Container component={"main"} maxWidth="md" sx={{ pt: 5, pb: 6 }}>
          <Typography align='center' variant='h3' sx={{fontStyle: "inherit", fontFamily: "initial", fontWeight: 30}} gutterBottom>
            Hallo Codingers <WavingHand sx={{fontSize: 50}}/>
          </Typography>
          <Typography align='center' variant='h6' sx={{color: "white", fontFamily: "revert"}} gutterBottom>
            {
            "Welcome to Your Dashboard, How are you today?"
            }
          </Typography>
        </Container>
        <Divider component="animate" sx={{color: "white", fontSize: 10,}} />
        <Container component={"main"} maxWidth="md" sx={{margin: 2,}} >
          <Grid container spacing={5} alignItems="center">
            {dataDashboard.map((item, index) => {
              return (
                <Grid item key={index} lg={4} md={4} sm={4} xs={12}>
                  <Card variant='outlined' >
                    <CardHeader
                      title={item.title}
                      titleTypographyProps={{ align: "center" }}
                      sx={{fontStyle: "initial", fontFamily: "monospace"}}
                    />
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent>
                    <Typography>{item.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Container component={"main"} maxWidth="md" sx={{margin: 2,}}>
            <DashboardAssignments/>
        </Container>
        </div>
      )}
      <BottomAppBar/>
    </ThemeProvider>
  )
}
