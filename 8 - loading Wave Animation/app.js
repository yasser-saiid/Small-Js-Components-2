const loadingText = document.querySelector('.text-wave')
window.addEventListener('DomContentLoad', wave)

function wave() {
  const text = loadingText.textContent
    .split('')
    .map((letter, index) => {
      return `<span style="animation-delay: ${index * 150}ms;">${letter}</span>`
    })
    .join('')
  loadingText.innerHTML = text
}
wave()
