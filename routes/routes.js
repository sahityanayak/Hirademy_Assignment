// routes.js

const express = require('express');
const router = express.Router();
const db = require('../db');

// For Creating a new assistant record
router.post('/assistant', (req, res) => {
    const { name, mobile, email, salary, city, country, department, role } = req.body;
    db.run("INSERT INTO assistants (name, mobile, email, salary, city, country, department, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
        [name, mobile, email, salary, city, country, department, role], function(err) {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        res.status(201).json({ id: this.lastID });
    });
});

// To Retrieve the details of a specific assistant
router.get('/assistant/:id', (req, res) => {
    const { id } = req.params;
    db.get("SELECT * FROM assistants WHERE id = ?", [id], (err, row) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        if (!row) {
            return res.status(404).json({ message: 'Assistant not found' });
        }
        res.json(row);
    });
});

// To Update the details of a specific assistant
router.put('/assistant/:id', (req, res) => {
    const { name, mobile, email, salary, city, country, department, role } = req.body;
    const { id } = req.params;
    db.run("UPDATE assistants SET name = ?, mobile = ?, email = ?, salary = ?, city = ?, country = ?, department = ?, role = ? WHERE id = ?", 
        [name, mobile, email, salary, city, country, department, role, id], (err) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        res.json({ message: 'Assistant updated' });
    });
});

// To Delete a specific assistant
router.delete('/assistant/:id', (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM assistants WHERE id = ?", [id], (err) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json({ message: 'Assistant deleted' });
    });
});

module.exports = router;
