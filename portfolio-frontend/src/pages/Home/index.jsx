import React from 'react';
import { Box, Typography, Button, Grid, Chip, Container } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import styles from './Home.module.css';
import My_Pic from '../../assets/My_Pic.jpg';
import Avatar from '@mui/material/Avatar';

const Home = () => {
  const skills = [
    { name: 'C++', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'AI', level: 80 },
    { name: 'React', level: 40 },
    { name: 'JavaScript', level: 80 },
  ];

  return (
    <Box className={styles.homeContainer}>
      {/* Hero Section */}
      <Container maxWidth="lg" className={styles.heroSection}>
        <div className={styles.heroHeader}>
          <Avatar alt="My Avatar" src={My_Pic} className={styles.heroAvatar} />
          <Typography variant="h2" className={styles.heroTitle}>
            Huzaifa Saleem
          </Typography>
        </div>
        <Typography variant="h5" className={styles.heroSubtitle}>
          Computer Scientist | Web Developer
        </Typography>
        <Box className={styles.heroButtons}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<GitHub />}
            href="https://github.com/mhuzaifa24"
            target="_blank"
            className={styles.button}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<LinkedIn />}
            href="https://linkedin.com/in/huzaifa24"
            target="_blank"
            className={styles.button}
          >
            LinkedIn
          </Button>
        </Box>
      </Container>

      {/* About Section */}
      <Container maxWidth="lg" className={styles.aboutSection}>
        <Typography variant="h4" gutterBottom className={styles.sectionTitle}>
          About Me
        </Typography>
        <Box className={styles.aboutCard}>
          <Typography variant="body1" className={styles.sectionText}>
            I'm a passionate Computer Science student with a keen interest in building innovative solutions using C++, Python, and AI technologies. My journey in tech is driven by curiosity and a desire to create impactful projects. Explore my portfolio to see my work in action!
          </Typography>
        </Box>
      </Container>

      {/* Skills Section */}
      <Container maxWidth="lg" className={styles.skillsSection}>
        <Typography variant="h4" gutterBottom className={styles.sectionTitle}>
          My Skills
        </Typography>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.skillLabel}>{skill.name}</div>
              <div className={styles.progressContainer}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Box>
  );
};

export default Home;