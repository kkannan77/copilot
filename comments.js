// Create web server with express

const express = require('express');
const app = express();

// Create a route to get comments
app.get('/comments', (req, res) => {
    res.send('Comments will be here');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});