import { AppBar, Button, ThemeProvider, Toolbar, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import NavigationDrawer from '../../components/Navbar/DrawerNavigation';
import { theme } from "../../utils/ThemeProvider";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../utils/slices/auth';
import eventBus from '../../utils/common/eventBus';

export default function TopAppBar() {
  const [showGuruBoard, setShowGuruBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowGuruBoard(currentUser.roles.includes("ROLE_GURU"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowGuruBoard(false);
      setShowAdminBoard(false);
    }

    eventBus.on("logout", () => {
      logOut();
    });

    return () => {
      eventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position='static' color='transparent'>
        <Toolbar>
          <NavigationDrawer/>
          <Typography variant="h6" component="animateTransform" noWrap sx={{flexGrow: 1}}><strong>Educo</strong></Typography>
          {currentUser && (
          <><Typography variant="h6" no Wrap sx={{ marginRight: 5 }}><strong>Welcome, {currentUser.username}</strong></Typography>
            <Button variant="outlined" >
              <a href="/" onClick={logOut}>
                LogOut
              </a>
            </Button>
          </>)}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}
