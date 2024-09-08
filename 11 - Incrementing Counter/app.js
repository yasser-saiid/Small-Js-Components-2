const counters = document.querySelectorAll('article h4')

counters.forEach((counterItem) => {
  updateCount(counterItem)
})

function updateCount(element) {
  // counter element data-count
  const counterValue = parseInt(element.dataset.count)
  //the number (1000) if this number biger than 1000 the countr take more time
  const increment = Math.ceil(counterValue / 500)
  let intValue = 0

  const increaseCount = setInterval(function () {
    intValue += increment

    if (intValue > counterValue) {
      element.textContent = `${counterValue} +`
      clearInterval(increaseCount)

      return
    }

    element.textContent = `${intValue} +`
  }, 1)
}

// anther selution
