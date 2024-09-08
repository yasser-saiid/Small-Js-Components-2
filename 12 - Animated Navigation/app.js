const navbar = document.querySelector('.navbar')
const links = document.querySelector('.links')
const toggleNavbar = document.querySelector('.toggle-navbar')

toggleNavbar.addEventListener('click', (evt) => {
  navbar.classList.toggle('active')
})
