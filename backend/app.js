const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello CI/CD with GitHub Actions!' });
});

app.get('/greet', (req, res) => {
  res.json({ message: 'Greetings from CI/CD demo!' });
});

// Mongo connection (only once)
if (process.env.NODE_ENV !== 'test') {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));
}

module.exports = app;
