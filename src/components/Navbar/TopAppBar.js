import {
  AppBar,
  Button,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import NavigationDrawer from '../../components/Navbar/DrawerNavigation';
import { theme } from '../../utils/ThemeProvider';
import eventBus from '../../utils/common/eventBus';
import { jwtDecode } from 'jwt-decode';
import axiosInstance from '../../config/axiosInstance';

export default function TopAppBar() {
  const [userInfo, setUserInfo] = useState(null);

  // Menggunakan localStorage untuk mendapatkan informasi pengguna
  const accessToken = localStorage.getItem('accessToken');

  const logOut = useCallback(() => {
    // Menghapus informasi pengguna dari localStorage saat logout
    localStorage.removeItem('accessToken');
    setUserInfo(null);
  }, []);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (accessToken) {
          // Mendapatkan ID pengguna dari token akses
          const decodedToken = jwtDecode(accessToken);
          const userId = decodedToken.id;
          console.log('Decoded Token:', decodedToken);

          // Mendapatkan informasi pengguna berdasarkan ID pengguna yang login
          const response = await axiosInstance.get(`/api/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          setUserInfo(response.data);
        }
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchUserInfo();

    eventBus.on('logout', () => {
      logOut();
    });

    return () => {
      eventBus.remove('logout');
    };
  }, [accessToken, logOut]);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position='static' color='transparent'>
        <Toolbar>
          <NavigationDrawer />
          <Typography variant='h5' noWrap sx={{ flexGrow: 1 }} fontFamily='fantasy'>
            EDUCO
          </Typography>
          {userInfo && (
            <>
              <Typography variant='h6' noWrap sx={{ marginRight: 4 }} fontFamily='serif'>
                Welcome, {userInfo.id}
              </Typography>
              <Button variant='outlined'>
                <a href='/' onClick={logOut}>
                  LogOut
                </a>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
