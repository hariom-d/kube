// server.js
const https = require('node:https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./certs/server.key'),
  cert: fs.readFileSync('./certs/server.crt'),
  ca: [fs.readFileSync('./certs/client.crt')], // Trust client cert
  requestCert: true,       // Require client certificate
  rejectUnauthorized: true // Reject unauthenticated clients
};

https.createServer(options, (req, res) => {
  res.writeHead(200, {});
  res.end('Hello World');
}).listen(3000, () => {
  console.log('Server is running on port 3000');
});
