document.addEventListener('DOMContentLoaded', () => {
  const preLoader = document.querySelector('.preLoader')
  const body = document.body

  body.style.overflow = 'hidden'

  window.addEventListener('load', () => {
    preLoader.classList.add('preLoader--hidden')

    setTimeout(() => {
      preLoader.style.display = 'none'
      body.style.overflow = ''
    }, 500)
  })
})
