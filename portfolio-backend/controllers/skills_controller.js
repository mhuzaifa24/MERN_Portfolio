const Skill = require('../models/skills_model');

const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addSkill = async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    res.status(201).json(skill);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateSkill = async (req, res) => {
  try {
    const updated = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteSkill = async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Skill deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getSkills, addSkill, updateSkill, deleteSkill };
