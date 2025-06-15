const Education = require('../models/education_model');

// Get all education records
const getAllEducation = async (req, res) => {
    try {
        const data = await Education.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a new record
const addEducation = async (req, res) => {
    try {
        const newEdu = new Education(req.body);
    await newEdu.save();
        res.status(201).json(newEdu);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { getAllEducation, addEducation };
