const express = require('express');
const app = express();
const port = 3000;

const logMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Sonraki middleware'e geç
};

// Middleware'i uygula
app.use(logMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World from the client!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
