var fs = require('fs'),
    http = require('http');

http.createServer(function (req, res) {
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
// The http server listens on port 3000
}).listen(8080, function(err) {
  if (err) throw err
  console.log('Listening on 8080...')
});