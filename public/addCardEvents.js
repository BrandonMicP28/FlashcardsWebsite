const addCardBtn = document.getElementById('add-cards-screen-btn')
const addCardModal = document.getElementById("add-card-modal")
const exitAddCardBtn = document.getElementById("exit-add-card-menu")

addCardBtn.addEventListener('click', () => {
    addCardModal.classList.remove('hidden')
})

exitAddCardBtn.addEventListener('click', () => {
    addCardModal.classList.add('hidden');
})