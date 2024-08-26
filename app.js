// app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const eventRoutes = require('./event-routes'); // Import the event routes

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the event routes with /api prefix
app.use('/api', eventRoutes);

// Serve your index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
