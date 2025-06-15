import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // your backend URL
});

export const getEducation = () => API.get('/education');

export const getProjects = () => API.get('/projects');
// Example: post contact form
export const submitContact = (data) => API.post('/contact', data);

export const getSkills = () => API.get('/skills');

