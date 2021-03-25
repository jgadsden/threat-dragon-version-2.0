const request = require('supertest');
const app = require('../server.js');

describe('GET /', function() {
  it('returns home page', function() {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type',"text/html; charset=UTF-8")
  })
})
