const express = require('express');
const router = require('./routes/index');

const app = express();
const PORT = 1245;

// Use the router for handling routes
app.use('/', router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

export default app;
