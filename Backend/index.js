const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();

// Middleware
app.use(bodyParser.json());

app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactForm');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB");
});

// Define schema and model
const contactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.post('/api/contact', async (req, res) => {
    const { fullName, email, message } = req.body;
    const contact = new Contact({ fullName, email, message });
    try {
      await contact.save();
      res.json({ message: 'Contact saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to save contact' });
    }
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
