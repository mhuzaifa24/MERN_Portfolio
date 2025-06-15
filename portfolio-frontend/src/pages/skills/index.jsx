    // src/pages/skills/index.js
    import React from 'react';
    import { Box, Typography, Chip, Stack } from '@mui/material';

    const Skills = () => {
    const skills = ["C++", "Python", "HTML/CSS", "ReactJS", "Data Structures & Algorithms"];

    return (
        <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>Skills</Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap">
            {skills.map((skill, index) => (
            <Chip label={skill} key={index} color="primary" sx={{ mb: 1 }} />
            ))}
        </Stack>
        </Box>
    );
    };

    export default Skills;
