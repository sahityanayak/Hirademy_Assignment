// db.js

const sqlite3 = require('sqlite3').verbose();

// Open SQLite database file
const db = new sqlite3.Database('assistant_database.db');

// Create Assistant table 
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS assistants (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, mobile TEXT, email TEXT, salary REAL, city TEXT, country TEXT, department TEXT, role TEXT)");
});

module.exports = db;
