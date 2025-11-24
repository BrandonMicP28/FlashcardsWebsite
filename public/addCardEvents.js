const enterAddCardBtn = document.getElementById('add-cards-screen-btn')
const addCardModal = document.getElementById("add-card-modal")
const exitAddCardBtn = document.getElementById("exit-add-card-menu")
const addCardWordBox = document.getElementById("add-card-enter-word")
const addCardDefBox = document.getElementById("add-card-enter-description")
const addCardBtn = document.getElementById("add-card")

enterAddCardBtn.addEventListener('click', () => {
    addCardModal.classList.remove('hidden')
})

exitAddCardBtn.addEventListener('click', () => {
    addCardModal.classList.add('hidden');
})

addCardBtn.addEventListener('click', async () => {
    const word = addCardWordBox.value
    const definition = addCardDefBox.value
    try {
        const response = await fetch('http://192.168.1.182:3000/add-card', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                word,
                definition
            })
        })

        if (response.ok) {
            alert("Card Saved!")
            addCardWordBox.value = ""
            addCardDefBox.value = ""
        } else {
            alert("Failed to save card")
        }
    } catch (error) {
        console.error("Error:", error)
        alert("Could not connect to server")
    }
})