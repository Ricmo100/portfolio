const Contact = require('../models/contact');

const submitContact = async (req, res, next) => {
    try {
      const { name, email, message } = req.body;
  
      console.log('💬 Incoming contact form data:', req.body);
  
      if (!name || !email || !message) {
        const error = new Error('All fields are required');
        error.status = 400;
        throw error;
      }
  
      const contact = new Contact({ name, email, message });
      await contact.save();
  
      res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (err) {
      console.error('🔥 Error saving contact:', err.message);
      next(err);
    }
  };
  

module.exports = { submitContact };
