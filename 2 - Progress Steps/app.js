// select progress items
const progressLine = document.getElementById('progress')
const progressCircle = document.querySelectorAll('.circle')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

let currentActive = 1

prevBtn.addEventListener('click', () => {
  currentActive--
  if (currentActive < 1) {
    currentActive = 1
  }
  updateProgress()
})
nextBtn.addEventListener('click', () => {
  currentActive++
  if (currentActive > progressCircle.length) {
    currentActive = progressCircle.length
  }
  updateProgress()
})

function updateProgress() {
  progressCircle.forEach((circle, indxe) => {
    if (indxe < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')
  const progressWidth =
    ((actives.length - 1) / (progressCircle.length - 1)) * 100
  progressLine.style.width = `${progressWidth}%`

  if (currentActive === 1) {
    prevBtn.disabled = true
  } else if (currentActive === progressCircle.length) {
    nextBtn.disabled = true
  } else {
    prevBtn.disabled = false
    nextBtn.disabled = false
  }
}
