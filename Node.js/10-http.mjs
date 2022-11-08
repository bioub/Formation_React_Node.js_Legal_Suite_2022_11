import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = 4000;

const server = createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<p>Home page</p>');
  } else if (req.method === 'GET' && req.url === '/api/json') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({msg: 'Hello'}));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<p>Not Found</p>');
  }
});

server.on('error', (err) => {
  console.log('Erreur : ', err.message)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
