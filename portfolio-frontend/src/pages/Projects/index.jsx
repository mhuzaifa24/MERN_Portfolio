import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
    title: "Text Editor in C++",
    description: "Data Structures project using linked list for file editing.",
    },
    {
    title: "AuXion",
    description: "C++ Project developing a Distributed Auction System",
    },
    {
    title: "Portfolio Website",
    description: "Personal portfolio built in ReactJS using Material UI.",
    },
    {
    title: "Library Management System",
    description: "C++ project for Storing book records.",
    },
    {
    title: "AI Search Algorithms",
    description: "Python implementations of BFS, DFS, UCS, A*, etc.",
    },
    {
    title: "ChefMate",
    description: "AI Powered Platform for cooking assistant",
    },
  ];

  return (
      <Box className={styles.projectsContainer}>
      <Typography variant="h4" className={styles.title}>
        Projects
      </Typography>
      <Grid container spacing={3} className={styles.container}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              className={styles.card}
              style={{ '--index': index }}
            >
              <CardContent className={styles.cardContent}>
                <Typography variant="h6" className={styles.cardTitle}>
                  {project.title}
                </Typography>
                <Typography variant="body2" className={styles.cardSubtitle}>
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

  );
};

export default Projects;