import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './Contacts.module.css';

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid').required('Required'),
    message: Yup.string().required('Required'),
  });

  const Contact = () => {
    const formik = useFormik({
      initialValues: { name: '', email: '', message: '' },
      validationSchema,
      onSubmit: values => console.log(values),
    });

    return (
      <Box className={styles.formContainer} component="form" onSubmit={formik.handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          className={styles.inputField}
          InputLabelProps={{ className: styles.inputLabel }}
          InputProps={{ className: styles.input }}
        />
        <TextField
          label="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          className={styles.inputField}
          InputLabelProps={{ className: styles.inputLabel }}
          InputProps={{ className: styles.input }}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          className={styles.inputField}
          InputLabelProps={{ className: styles.inputLabel }}
          InputProps={{ className: styles.input }}
        />
        <Button type="submit" variant="contained" className={styles.submitButton}>
          Send
        </Button>
      </Box>
    );
  };

  export default Contact;