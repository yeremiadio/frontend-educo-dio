import  React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AccountTree, Archive, Assignment, Book, Dashboard, Home, MenuOpen, QuestionMark } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axiosInstance from '../../config/axiosInstance';



export default function NavigationDrawer() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    left: false,
  });
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

  const toggleDrawer =
    (anchor , open) =>
    (event) => {
      if (
        event.type === 'keydown' &&
        ((event).key === 'Tab' ||
          (event).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem disablePadding onClick={() => navigate("/dashboard")}>
            <ListItemButton>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => navigate("/materi")}>
            <ListItemButton>
              <ListItemIcon>
                <Book />
              </ListItemIcon>
              <ListItemText primary="Materi" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => navigate("/assignment")}>
            <ListItemButton>
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary="Assignment" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => navigate("/codingpage")}>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Coding Page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            {userInfo.roleId && !userInfo.roleId === ('1') ? (
              <ListItemButton onClick={() => navigate("/archive")}>
                <ListItemIcon>
                  <Archive />
                </ListItemIcon>
                <ListItemText primary="Archive" />
              </ListItemButton>
            ) : (
              <ListItemButton disabled>
                <ListItemIcon>
                  <Archive />
                </ListItemIcon>
                <ListItemText primary="Archive" />
              </ListItemButton>
            )}
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem disablePadding onClick={() => navigate("/profile")}>
            <ListItemButton>
              <ListItemIcon>
                <AccountTree/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => navigate("/pedoman")}>
              <ListItemButton>
                <ListItemIcon>
                  <QuestionMark/>
                </ListItemIcon>
                <ListItemText primary="Guide" />
              </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {(['']).map((anchor) => (
        <React.Fragment key={anchor} >
          <Button color="inherit">
            <MenuOpen 
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(anchor, true)}
            >
              (anchor)
            </MenuOpen>
          </Button>
          {userInfo && (
            <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            
          </Drawer>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}