// event-routes.js
const express = require('express');
const router = express.Router();
const db = require('./database'); // import the database connection

// Add Event
router.post('/add-event', (req, res) => {
  const { title, date, description } = req.body;
  const sql = 'INSERT INTO events (title, date, description) VALUES (?, ?, ?)';
  db.query(sql, [title, date, description], (err, result) => {
    if (err) {
      return res.status(500).send('Error adding event');
    }
    res.send('Event added successfully');
  });
});

// Delete Event
router.delete('/delete-event/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM events WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).send('Error deleting event');
    }
    res.send('Event deleted successfully');
  });
});

// Fetch Events
router.get('/events', (req, res) => {
  const sql = 'SELECT * FROM events';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send('Error fetching events');
    }
    res.json(results);
  });
});

module.exports = router;
