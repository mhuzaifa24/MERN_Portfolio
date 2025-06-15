const Project = require('../models/project_model');

// Get all projects
const getProjects = async (req, res) => {
  try {
   const projects = await Project.find();
   res.status(200).json(projects);
  } catch (err) {
   res.status(500).json({ error: err.message });
  }
};

// Add a new project
const addProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a project
const updateProject = async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a project
const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Project deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getProjects, addProject, updateProject, deleteProject };
