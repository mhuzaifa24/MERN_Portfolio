const express = require('express');
const router = express.Router();
const { getAllEducation, addEducation } = require('../controllers/educationController');

router.get('/', getAllEducation);
router.post('/', addEducation);

module.exports = router;
