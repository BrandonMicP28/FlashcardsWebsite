const express = require('express');
const db = require('./database')
const app = express();
const PORT = 3000;

app.use(express.static('public'))

app.get('/card', (req, res) => {

    let card = db.query("SELECT * FROM flashcards ORDER BY RAND() LIMIT 1")
    res.json(card)

})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});