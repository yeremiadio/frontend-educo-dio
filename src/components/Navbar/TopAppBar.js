import { AppBar, ThemeProvider, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Buttons from '../../components/Buttons/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationDrawer from '../../components/Navbar/DrawerNavigation';
import { theme } from "../../utils/ThemeProvider";

export default function TopAppBar() {
  const navigate = useNavigate(); 
  const location = useLocation();
  const userLogin = location.state.user;

  console.log(location);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position='static' color='transparent'>
        <Toolbar>
          <NavigationDrawer/>
          <Typography variant="h6" noWrap sx={{flexGrow: 1}}>Educo</Typography>
          <Typography variant="h7" no Wrap sx={{marginRight: 5}}>Welcome, {userLogin}</Typography>
          <Buttons
            label= "Log Out"
            variant= "outlined"
            onClick= {() => navigate("/",{state:null})}
          />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}
