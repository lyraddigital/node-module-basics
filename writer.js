'use strict';

function writer() {
    this.writeHelloWorldResponse = function(res) {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end('Hello World');
    }
}

module.exports = new writer();