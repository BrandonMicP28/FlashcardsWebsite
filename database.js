const { Pool } = require('pg')
require('dotenv').config()
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});

(async () => {
    try {
        await pool.query(`CREATE TABLE IF NOT EXISTS flashcards (id SERIAL PRIMARY KEY, 
                                           word TEXT UNIQUE NOT NULL, 
                                           definition TEXT NOT NULL)`)
    } catch (error) {
        console.error("error while creating table:", error)
    }
})();

module.exports = {
    query: (text, params) => pool.query(text, params)
};