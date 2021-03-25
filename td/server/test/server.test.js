const request = require('supertest');
const app = require('../server.js');

// test for the webapp home page
describe('GET /', function() {
  it('returns home page', function() {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type',"text/html; charset=UTF-8")
  })
})

describe('GET /unknown', function() {
  it('test for an incorrect page', function() {
    return request(app)
      .get('/unknown')
      .expect(404)
  })
})
