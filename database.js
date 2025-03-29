const sqlite3 = require("sqlite3").verbose();

// Connect to SQLite database (or create if not exists)
const db = new sqlite3.Database("./database.sqlite", (err) => {
    if (err) {
        console.error("Database connection error:", err.message);
    } else {
        console.log("Connected to the SQLite database.");
    }
});

module.exports = db;
