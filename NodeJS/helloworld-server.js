const http = require('http');

var server = http.createServer(function(req, res) {
   res.writeHead(200, {
      'Content-Type': 'text/plain'
   });

   switch (req.url) {
      case '/':
         res.end('Accueil');
         break;
      case '/toto':
         res.end('Toto');
         break;
      default:
         res.statusCode = 404;
         res.end('Page not found');
   }
});

server.listen(8080, function() {
   console.log('URL du serveur : http://localhost:8080');
});