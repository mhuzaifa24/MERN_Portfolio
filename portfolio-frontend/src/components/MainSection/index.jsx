    import React from 'react';
    import { Box } from '@mui/material';
    import { Routes, Route } from 'react-router-dom';
    import Home from '../../pages/Home';
    import Education from '../../pages/Education';
    import Projects from '../../pages/Projects';
    import Contact from '../../pages/Contact';

    const drawerWidth = 238;

    const MainSection = () => {
    return (
        <Box
        component="main"
        sx={{
            flexGrow: 1,
            pt: 0.25, 
            pr: 0.1,
            pb: 3,
            pl: 3,
            ml: { sm: `${drawerWidth}px` },
        }}
        >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </Box>
    );
    };

    export default MainSection;
