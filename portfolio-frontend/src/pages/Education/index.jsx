import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import styles from './Education.module.css';

const Education = () => {
  const educationData = [
    {
      degree: "BS Computer Science",
      institution: "Information Technology University",
      year: "2022 - Present",
    },
    {
      degree: "Intermediate",
      institution: "Punjab Group of Colleges",
      year: "2020 - 2022",
    },
    {
      degree: "Matriculation",
      institution: "The Trust School",
      year: "2018 - 2020",
    },
  ];

  return (
    <Box className={styles.educationWrapper}>
      <Typography variant="h4" className={styles.title}>
        Education
      </Typography>
      <Grid container spacing={3} className={styles.container}>
        {educationData.map((edu, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              className={styles.card}
              style={{ '--index': index, height: '220px', width: '100%' }}
            >
              <CardContent className={styles.cardContent}>
                <Typography variant="h6" className={styles.cardTitle}>
                  {edu.degree}
                </Typography>
                <Typography className={styles.cardSubtitle}>
                  {edu.institution}
                </Typography>
                <Typography className={styles.cardSubtitle}>
                  {edu.year}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Education;