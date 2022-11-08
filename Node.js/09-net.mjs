import net from 'net';

const server = net.createServer((socket) => {
  console.log('connection');
  // socket est DuplexStream
  socket.pipe(process.stdout);
  socket.write('Hello')
});

let port = 3000;

// server.on('connection', (socket) => {
//   console.log('connection');
// });

server.once('listening', () => {
  console.log('listening, port : ', port);
});

server.on('error', (err) => {
  console.log('error');
  if (err.code === 'EADDRINUSE') {
    server.listen(++port);
  }
});

server.listen(port);
