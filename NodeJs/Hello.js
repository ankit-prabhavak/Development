var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello, World!');
}).listen(8080);


// console.log('Server running at http://localhost:8080/');




// Takeaways:// This code creates a simple HTTP server using Node.js that listens on port 8080 and responds with "Hello, World!" 
// when accessed.

// HTTP is a protocol used for transmitting data over the web. It is stateless, meaning each request is independent of others. 
// The server listens on port 8080 for incoming requests and responds with a simple text message.

// Anonymous functions are used here to handle requests. The `req` parameter represents the request object, and `res` is the response object.
// Anonymous functions in JavaScript are functions that do not have a name and are often used as arguments to other functions or methods.


// The `writeHead` method sets the HTTP status code and headers for the response, while `end` sends the response back to the client.
// The server can be accessed by navigating to http://localhost:8080/ in a web browser or using a tool like curl or Postman.

// 403 Forbidden is an HTTP status code indicating that the server understands the request but refuses to authorize it.
// 404 Not Found is another HTTP status code indicating that the requested resource could not be found on the server.
// 500 Internal Server Error is a status code indicating that the server encountered an unexpected condition that prevented it from fulfilling the request.
// 200 OK is a status code indicating that the request has succeeded and the server is returning the requested data.

// There are 65536 ports available for use in TCP/IP networking, ranging from 0 to 65535.
