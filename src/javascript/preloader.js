document.addEventListener('DOMContentLoaded', () => {
  const preLoader = document.querySelector('.preLoader')
  window.addEventListener('load', () => {
    preLoader.classList.add('preLoader--hidden')

    setTimeout(() => {
      preLoader.style.display = 'none'
    }, 500)
  })
})
