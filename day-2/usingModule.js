const http = require('http');
// Sample book data
const books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' }
];

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/api/books') {
      // Handle GET request for books API
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(books));
    } else {
      // Handle other requests
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Endpoint not found');
    }
  });
  const port = 3000;
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
