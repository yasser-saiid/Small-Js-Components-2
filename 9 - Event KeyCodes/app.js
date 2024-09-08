const keyCenter = document.querySelector('.key-center')

window.addEventListener('keydown', (e) => {
  keyCenter.innerHTML = ` <article class="key">
          <small>event key</small>
          <span>${e.key === ' ' ? 'space' : e.key}</span>
        </article>
        <article class="key">
          <small>event keyCode</small>
          <span>${e.keyCode}</span> 
        </article>
        <article class="key">
          <small>event code</small>
          <span>${e.code}</span>
        </article>`
})
