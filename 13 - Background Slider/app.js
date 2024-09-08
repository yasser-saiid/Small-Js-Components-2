const toggleBtn = document.querySelector('.toggle-btn')
const allSlidImg = document.querySelectorAll('.img-container')

let activeIndex = 0

toggleBtn.addEventListener('click', () => {
  // remove class active from all slid image
  allSlidImg.forEach((sild) => sild.classList.remove('active'))

  // add class active form specifec  slid image
  const activeSlid = document.querySelector(`div[data-index="${activeIndex}"]`)
  activeSlid.classList.add('active')
  activeIndex++

  // rest active slid to zero is it bigthan allSlidImg.length
  if (activeIndex > allSlidImg.length - 1) {
    activeIndex = 0
  }
})
