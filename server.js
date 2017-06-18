const express = require('express')
const path = require('path')

const app = express();

const port = 3000;

const root = './app/';

app.use(express.static(path.join(__dirname, './app/public')));

app.get('/', function(req, res) {
  res.sendFile('app/views/index.html', { root : __dirname });
});

module.exports = app;
if (!module.parent) {
  app.listen(port, function() {
    console.log('Server started on port '+ port)
  });
}
