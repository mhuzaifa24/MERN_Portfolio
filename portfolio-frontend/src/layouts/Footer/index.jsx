import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        bgcolor: '#1e1e1e',
        color: '#e0e0e0',
        textAlign: 'center',
        py: 0.5, // reduced padding
        borderTop: '2px solid #116466',
        boxShadow: '0 -2px 4px rgba(0,0,0,0.3)',
        zIndex: 1300,
        
      }}
    >
      <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>
        © {new Date().getFullYear()} Huzaifa Saleem | All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
