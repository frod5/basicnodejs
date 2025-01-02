// import http from 'http' 와 같음
const http = require('http');

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>hello world</h1>')
});

server.listen(port, host, () => {
    console.log(`Server listening on port ${port}`);
})