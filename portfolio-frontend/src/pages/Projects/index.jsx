import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import styles from './Projects.module.css';
import { getProjects } from '../../api/index';


const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const res = await getProjects();
        setProjects(res.data);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      }
    };

    fetchAllProjects();
  }, []);

  return (
    <Box className={styles.projectsContainer}>
      <Typography variant="h4" className={styles.title}>
        Projects
      </Typography>
      <Grid container spacing={3} className={styles.container}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={styles.card} style={{ '--index': index }}>
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
