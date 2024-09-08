const lodaingText = document.querySelector('.lodaing-text')
const backGroung = document.querySelector('.bg')
let lodaing = 0

const interval = setInterval(bluring, 50)

function bluring() {
  lodaing++

  lodaingText.textContent = `${lodaing}%`

  if (lodaing > 99) {
    clearInterval(interval)
    lodaingText.style.opacity = '0'
    backGroung.style.filter = `blur(0px)`
  }
}
