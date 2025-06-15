import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './Contact.module.css';
import { submitContact } from '../../api'; // Adjust if needed

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid').required('Required'),
  message: Yup.string().required('Required'),
});

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validationSchema,
  onSubmit: async (values, { resetForm }) => {
  try {
    await submitContact(values);
    alert("Message sent successfully! ✅"); // Confirmation
    resetForm(); // Optional: Clear the form
  } catch (error) {
    console.error(error);
    alert("Something went wrong! ❌");
  }
}

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
      <Button
        variant="contained"
        className={styles.submitButton}
        onClick={formik.handleSubmit}  // ✅ Triggers the `post` (submit) function
>
  Send
</Button>


      {/* Feedback */}
      {submitted && <p className={styles.success}>Message sent successfully!</p>}
      {error && <p className={styles.error}>{error}</p>}
    </Box>
  );
};

export default Contact;
