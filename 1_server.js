// import http from 'http' 와 같음
const http = require('http');
const url = require('url');

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;

    if (path === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Home page!!</h1>')
    } else if (path === '/post') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Post page!!</h1>')
    } else if (path === '/user') {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>User page!!</h1>')
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 page not found</h1>')
    }
});

server.listen(port, host, () => {
    console.log(`Server listening on port ${port}`);
})