// index.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Routes
app.get('/', (req, res) => res.json({ message: 'Hello CI/CD with GitHub Actions!' }));

// Export app without starting server
module.exports = app;

// Connect to MongoDB only if not in test
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 5000;
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
mongoose.connect(process.env.MONGO_URI)
