const sancronos = require('../index');
const should = require('should');

describe('Basic tests', function() {
  it('must be something', function() {
    return should.exist(sancronos);
  });
});
