// client.js
const https = require('node:https');
const fs = require('fs');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  ca: [fs.readFileSync('./certs/server.crt')],      // Trust server cert
  key: fs.readFileSync('./certs/client.key'),       // Client private key
  cert: fs.readFileSync('./certs/client.crt'),      // Client certificate
  rejectUnauthorized: true
};

const req = https.request(options, (res) => {
  console.log('Status Code : ', res.statusCode);
  res.on('data', (data)=> {
    process.stdout.write(data);
  });
});
req.on('error', (err) => {
  console.log(err);
});
req.end();
