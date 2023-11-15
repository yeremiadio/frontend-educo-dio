import {
  AppBar,
  Button,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import NavigationDrawer from '../../components/Navbar/DrawerNavigation';
import { theme } from '../../utils/ThemeProvider';
import eventBus from '../../utils/common/eventBus';

export default function TopAppBar() {
  

  // Menggunakan localStorage untuk mendapatkan informasi pengguna
  const currentUser = JSON.parse(localStorage.getItem('user'));

  const logOut = useCallback(() => {
    // Menghapus informasi pengguna dari localStorage saat logout
    localStorage.removeItem('user');
  }, []);

  useEffect(() => {

    eventBus.on('logout', () => {
      logOut();
    });

    return () => {
      eventBus.remove('logout');
    };
  }, [currentUser, logOut]);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position='static' color='transparent'>
        <Toolbar>
          <NavigationDrawer />
          <Typography variant='h5' noWrap sx={{ flexGrow: 1 }} fontFamily='fantasy'>
            EDUCO
          </Typography>
          {currentUser && (
            <>
              <Typography variant='h6' noWrap sx={{ marginRight: 4 }} fontFamily='serif'>
                Welcome, {currentUser.username}
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
