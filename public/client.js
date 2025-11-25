const getCardButton = document.getElementById('get-card-button');
const flashcardButton = document.getElementById('flashcard-btn');

getCardButton.addEventListener('click', async () => {
    const response = await fetch('http://192.168.1.182:3000/card');

    const data = await response.json()

    flashcardButton.innerText = `Q: ${data.word} \n A: ${data.definition}`
})