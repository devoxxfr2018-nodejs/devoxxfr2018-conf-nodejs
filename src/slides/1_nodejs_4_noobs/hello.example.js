export default (
`$node mon_fichier.js


// Hello world HTTP
const http = require('http');

http.createServer((req, res) => {
  res.end('Hello world! ' + new Date());
}).listen(8080, () => {
  console.log('Server started on port 8080');
});


// Hello world HTTP / JSON
const http = require('http');

http.createServer((req, res) => {
  res.writeHead(
    200, 
    {'Content-Type': 'application/json'}
  ); 
  res.end(JSON.stringify(
    {
      msg: 'Hello world! ',
      date: new Date()
    }
  ));
}).listen(8080, () => {
  console.log('Server started on port 8080');
});


// Client HTTP
const https = require('http');
 
https.get('http://localhost:8080', (resp) => {
  let data = '';

  // les données arrivent par morceaux
  resp.on('data', (chunk) => {
    data += chunk;
  });
 
  // c'est bon on a tout
  resp.on('end', () => {
    console.log(data);
  });
 
});
`  
);