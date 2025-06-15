    import React from 'react';
    import AppBar from '@mui/material/AppBar';
    import Toolbar from '@mui/material/Toolbar';
    import Typography from '@mui/material/Typography';
    import Avatar from '@mui/material/Avatar';
    import Menu from '@mui/material/Menu';
    import MenuItem from '@mui/material/MenuItem';
    import ProfilePic from '../../assets/ProfilePic.jpg';
    import IconButton from '@mui/material/IconButton';
    import FacebookIcon from '@mui/icons-material/Facebook';
    import InstagramIcon from '@mui/icons-material/Instagram';
    import './Header.css'; 

    const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
          position="static"
          sx={{
            backgroundColor: '#116466',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
            borderBottomLeftRadius: '24px',
            borderBottomRightRadius: '24px',  
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" className="header-title">
              My Portfolio
            </Typography>
    
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px'}}>
            <a href="https://facebook.com/mhuzaifa_24" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="social-icon" />
            </a>
            <a href="https://www.instagram.com/mhuzaifa_24/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="social-icon" />
            </a>
    
            <IconButton onClick={handleMenu} className="avatar-button">
                <Avatar alt="My Avatar" src={ProfilePic} className="avatar-img" />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{ className: 'menu-dropdown' }}
            >
                <MenuItem onClick={handleClose} className="menu-item">
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      );
    };
    
    export default Header;