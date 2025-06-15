import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // your backend URL
});

export const getEducation = () => API.get('/education');


export const fetchProjects = () => API.get('/project');

// Example: post contact form
export const submitContact = (data) => API.post('/contact', data);

export const getHome = () => API.get('/home');

export const getProjects = () => API.get('/projects');
