const textareaChoises = document.querySelector('.choises')
const choiceContainer = document.querySelector('.choice-container')
const randomTime = 1000

textareaChoises.addEventListener('keyup', (e) => {
  createChoice(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 50)
    getRandomPicker()
  }
})

// create chioce and append it into chioce container
function createChoice(value) {
  // convirt textarea value to array
  let choiceValue = value
    .split(',')
    .filter((choice) => choice.trim() !== '')
    .map((choice) => choice.trim())

  choiceContainer.innerHTML = ''

  // lopp on chioce value arry and create chioce element and append it into chioce container
  choiceValue.forEach((chioce) => {
    const choiceElement = document.createElement('span')
    choiceElement.classList.add('choice')
    choiceElement.textContent = chioce
    choiceContainer.appendChild(choiceElement)
  })
}

// get or pick random chioce after smoe time
function getRandomPicker() {
  // interval to add and remove highlight to chioce (shifting highlight)
  const interval = setInterval(() => {
    const randomChioce = pickRandomChioce()
    // add highlight class to chioce
    addHighlight(randomChioce)
    // add highlight class to chioce
    setTimeout(() => {
      removeHighlight(randomChioce)
    }, 100)
  }, 100)
  // and of inteval
  // stop setInterval
  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomChioce = pickRandomChioce()
      addHighlight(randomChioce)
    }, 100)
  }, 3000)
}

// return random chioce
function pickRandomChioce() {
  const allChioce = choiceContainer.querySelectorAll('.choice')
  return allChioce[Math.floor(Math.random() * allChioce.length)]
}

function addHighlight(chioce) {
  chioce.classList.add('picker')
}
function removeHighlight(chioce) {
  chioce.classList.remove('picker')
}
