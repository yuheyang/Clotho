/**
 * Created by Roland.Yu on 2017/2/23.
 */

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World - Node.js Work.');
}).listen(5656, '127.0.0.1');
console.log('Server running at http://127.0.0.1:5656/');


