const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const { v4: uuidv4 } = require('uuid');
const port = 3000;

// Set default middlewares (logger, static, cors, etc.)
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Add custom routes before JSON Server router
server.post('/posts', (req, res, next) => {
    const id = uuidv4(); // Generate UUID
    req.body.id = id;
  next();
});

// Use default JSON Server router
server.use(router);

// Start server
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
