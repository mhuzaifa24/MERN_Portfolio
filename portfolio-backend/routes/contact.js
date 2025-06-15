const express = require('express');
const router = express.Router();
const { addMessage, getAllMessages } = require('../controllers/contact_controller');

router.post('/', addMessage);         // For submitting contact form
router.get('/', getAllMessages);      // For admin viewing messages (optional)

module.exports = router;
