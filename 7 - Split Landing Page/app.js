const lights = document.querySelector('.lights')
const nature = document.querySelector('.nature')

lights.addEventListener('mouseenter', () =>
  lights.classList.add('lights-hover')
)
lights.addEventListener('mouseleave', () =>
  lights.classList.remove('lights-hover')
)

nature.addEventListener('mouseenter', () =>
  nature.classList.add('nature-hover')
)
nature.addEventListener('mouseleave', () =>
  nature.classList.remove('nature-hover')
)
