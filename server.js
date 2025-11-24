const express = require('express');
const db = require('./database')
const app = express();
const PORT = 3000;

app.use(express.json())

app.use(express.static('public'))

app.get('/card', async (req, res) => {

    let card = await db.query("SELECT * FROM flashcards ORDER BY RANDOm() LIMIT 1")
    if (card.rows.length === 0) {
        return res.status(404).json({error: "No cards found"})
    }

    const randomCard = card.rows[0];
    res.json(randomCard)

})

app.post('/add-card', async (req, res) => {
    const { word, definition} = req.body;

    try {
        await db.query('INSERT INTO flashcards (word, definition) VALUES ($1, $2)', [word, definition]);
        res.status(201).send("Successfully added card");
    } catch (error) {
        res.status(500).send("Error adding card")
        console.error("Error:", error)
    }
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});