// Run with 'node node_test.js'
// Basic node example found online at http://www.stoimen.com/blog/2010/12/02/diving-into-node-js-a-long-polling-example/

var http = require('http')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World\n')
}).listen(8124, '127.0.0.1')

console.log('Server running at http://127.0.0.1:8124/')
