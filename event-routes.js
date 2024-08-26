// event-routes.js
const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/events', (req, res) => {
    res.json({ message: 'Get events' });
});

router.post('/events', (req, res) => {
    res.json({ message: 'Add event' });
});

router.delete('/events/:id', (req, res) => {
    res.json({ message: 'Delete event' });
});

module.exports = router; // Export the router instance
