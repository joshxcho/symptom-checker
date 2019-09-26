const request = require('supertest');
const app = require('../server/index');

describe('GET', () => {
  it('Should get a response given a good GET request', () => request(app)
    .get('/')
    .then((response) => {
      expect(response.statusCode).toBe(200);
    }));
});
