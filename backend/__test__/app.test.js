const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index'); // import the app, not the server

// Optional: connect to test database if needed
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST || 'mongodb://localhost:27017/testdb');
});

// Close MongoDB after all tests
afterAll(async () => {
  await mongoose.connection.close();
});

test('GET / returns hello message', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('Hello CI/CD with GitHub Actions!');
});
