const ContactMessage = require('../models/contact_model');

const addMessage = async (req, res) => {
   try {
      const newMsg = new ContactMessage(req.body);
      await newMsg.save();
      res.status(201).json({ message: 'Message received successfully' });
   } catch (error) {
      res.status(500).json({ error: 'Failed to save message' });
   }
};

const getAllMessages = async (req, res) => {
    try {
        const messages = await ContactMessage.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve messages' });
    }
};

module.exports = { addMessage, getAllMessages };
