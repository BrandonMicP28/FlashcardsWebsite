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
        await pool.query(`CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, 
                                                            google_id TEXT UNIQUE NOT NULL, 
                                                            email TEXT UNIQUE NOT NULL, 
                                                            display_name TEXT UNIQUE, 
                                                            avatar_url TEXT, 
                                                            time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
                                                            last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`)
        await pool.query(`CREATE TABLE IF NOT EXISTS decks (id SERIAL PRIMARY KEY, 
                                                            title TEXT NOT NULL, 
                                                            user_id INTEGER REFERENCES users(id))`)
        await pool.query(`CREATE TABLE IF NOT EXISTS flashcards (id SERIAL PRIMARY KEY, 
                                                                 word TEXT UNIQUE NOT NULL, 
                                                                 definition TEXT NOT NULL, 
                                                                 knowledge_level INTEGER DEFAULT 0, 
                                                                 deck_id INTEGER REFERENCES decks(id))`)
    } catch (error) {
        console.error("error while creating table:", error)
    }
})();

module.exports = {
    query: (text, params) => pool.query(text, params)
};