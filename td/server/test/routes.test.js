const request = require('supertest');
const app = require('../server.js');

const version = require('../package.json').version;

describe('GET /api/version', function() {
	  it('returns version as json', function() {
	    return request(app)
	      .get('/api/version')
	      .expect(200)
	      .expect('Content-Type',/json/)
	      .expect('{"version":"2.0.0"}')
	  })
	})

describe('GET /api/pdf', function() {
  it('returns pdf', function() {
    return request(app)
      .get('/api/pdf')
      .expect(200)
      .expect('Content-Type',/json/)
      .expect('{"pdf":"to do"}')
  })
})

describe('GET /api/verbose', function() {
  it('returns debug level as json', function() {
    return request(app)
      .get('/api/verbose')
      .expect(200)
      .expect('Content-Type',/json/)
      .expect('{"verbose":"default"}')
  })
})

describe('POST /api/verbose', function() {
  it('sets debug level to "info"', function(done) {
    request(app)
      .post('/api/verbose')
      .send({"verbose":"info"})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
});

describe('GET /api/unknown', function() {
  it('test for an incorrect api', function() {
    return request(app)
      .get('/api/unknown')
      .expect(404)
  })
})
