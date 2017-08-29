var http = require('http');
var writer = require('./writer');

var server = http.createServer((req, res) => {
    writer.writeHelloWorldResponse(res);
});

server.listen(8080);