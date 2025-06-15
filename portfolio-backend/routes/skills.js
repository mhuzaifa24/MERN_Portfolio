const express = require('express');
const router = express.Router();

const {
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill
} = require('../controllers/skills_controller');

router.get('/', getSkills);
router.post('/', addSkill);
router.put('/:id', updateSkill);
router.delete('/:id', deleteSkill);

module.exports = router;
