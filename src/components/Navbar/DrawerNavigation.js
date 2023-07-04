import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Archive, Assignment, Book, Dashboard, Home, MenuOpen } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export default function NavigationDrawer() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false,
  });

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
          <ListItem disablePadding onClick={() => navigate("/dashboard",{state: true  })}>
            <ListItemButton>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => navigate("/materi",{state: true  })}>
            <ListItemButton>
              <ListItemIcon>
                <Book />
              </ListItemIcon>
              <ListItemText primary="Materi" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => navigate("/assignment",{state: true  })}>
            <ListItemButton>
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary="Assignment" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => navigate("/codingpage",{state: true  })}>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Coding Page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={() => navigate("/archive",{state: true  })}>
            <ListItemButton>
              <ListItemIcon>
                <Archive />
              </ListItemIcon>
              <ListItemText primary="Archive" />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
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
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}