const getCardButton = document.getElementById('get-card-button');
const display = document.getElementById('card-display');

getCardButton.addEventListener('click', async () => {
    const response = await fetch('http://192.168.1.182:3000/card');

    const data = await response.json()

    display.innerText = `Q: ${data.word} \n A: ${data.definition}`
})