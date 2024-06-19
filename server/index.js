const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin:["http://localhost:3000"]
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:aditi%4012345678@cluster0.z38shnd.mongodb.net/assignment' ,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define schema and model
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Item = mongoose.model('Item', itemSchema);

// Routes
app.get('/search', async (req, res) => {
  const query = req.query.q;
  try {
    const results = await Item.find({ name: new RegExp(query, 'i') });
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
