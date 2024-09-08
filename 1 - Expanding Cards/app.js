const allCards = document.querySelectorAll('.card')

allCards.forEach((card) => {
  card.addEventListener('click', (e) => {
    removeClassActive()
    e.currentTarget.classList.add('active')
  })
})

/* allCards.forEach((card) => {
  card.addEventListener('mouseover', (e) => {
    removeClassActive()
    e.currentTarget.classList.add('active')
  })
}) */

function removeClassActive() {
  allCards.forEach((item) => {
    item.classList.remove('active')
  })
}
