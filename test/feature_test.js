var app = require('../server');

describe('/', function() {
  before(function() {
    this.server = app.listen(3000, function() {});
  });

  it('should state player');

  after(function(done) {
    this.server.close(done);
  });
});
