const allBoxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBox)

function checkBox() {
  const trigger = window.innerHeight - 170
  allBoxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < trigger) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
