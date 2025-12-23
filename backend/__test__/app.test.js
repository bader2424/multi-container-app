const request = require('supertest');
const app = require('../index'); // path to your Express app

test('GET / returns hello message', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('Hello CI/CD with GitHub Actions!');
});
