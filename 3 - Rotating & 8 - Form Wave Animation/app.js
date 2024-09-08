const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')
const btnContainer = document.querySelector('.circle-btn')
const form = document.querySelector('.from')
const labels = document.querySelectorAll('.from-control label')

openBtn.addEventListener('click', (e) => {
  btnContainer.classList.add('active')
  form.classList.add('show')
})
closeBtn.addEventListener('click', (e) => {
  btnContainer.classList.remove('active')
  form.classList.remove('show')
})

labels.forEach((label) => {
  label.innerHTML = label.textContent
    .split('')
    .map((letter, index) => {
      return `<span style="animation-delay: ${index * 50}ms">${letter}</span>`
    })
    .join('')
})
