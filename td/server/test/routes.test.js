const request = require('supertest');
const app = require('../server.js');

describe('GET /api/version', function() {
  it('returns json response', function() {
    return request(app)
      .get('/api/version')
      .expect(200)
      .expect('Content-Type',/json/)
      .expect('{"version":"2.0.0"}')
  })
})
