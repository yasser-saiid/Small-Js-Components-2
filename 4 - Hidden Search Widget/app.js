const searchIcon = document.querySelector('.search-icon')
const searchInput = document.getElementById('search-input')

searchIcon.addEventListener('click', () => {
  searchIcon.classList.toggle('active')
  searchInput.classList.toggle('active')
})
