const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 1245;

// Use routes defined in the routes directory
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

export default app; // Ensure to export the app for testing purposes
