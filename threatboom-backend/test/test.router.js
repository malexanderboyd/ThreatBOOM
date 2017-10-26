const request = require('supertest');
var app = require('../app');

describe('Router API Test', function() {


  it('it should return feed data on /feed', function(done) {
    request(app)
      .get('/feed')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        done()
      });

  });
});