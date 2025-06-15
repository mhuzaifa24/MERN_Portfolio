import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Box,
  Typography,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import './SideNav.css';

const drawerWidth = 260;

const SideNav = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerContent = (
    <Box className="drawer-content">
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'cursive',
          color: '#116466',
          textAlign: 'center',
          padding: '8px 16px 8px 0px',
          fontWeight: 'bold',
          borderBottom: '1px solid #116466',
        }}
      >
        Portfolio
      </Typography>
      <List>
        {[
          { text: 'Home', icon: <HomeIcon />, to: '/' },
          { text: 'Education', icon: <SchoolIcon />, to: '/education' },
          { text: 'Projects', icon: <WorkIcon />, to: '/projects' },
          { text: 'Contact', icon: <ContactMailIcon />, to: '/contact' },
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.to}
            className="nav-item"
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton onClick={toggleDrawer} className="menu-icon">
            <MenuIcon />
          </IconButton>
          <Drawer open={open} onClose={toggleDrawer}>
            {drawerContent}
          </Drawer>
        </>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#1e1e1e',
              color: '#e0e0e0',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default SideNav;