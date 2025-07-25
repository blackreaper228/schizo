const goUp = () => {
  window.addEventListener('scroll', () => {
    const goUpButton = document.querySelector('.A_GoUp')
    const halfPageHeight = document.documentElement.scrollHeight / 2

    if (window.scrollY > halfPageHeight) {
      goUpButton.style.opacity = '1'
      goUpButton.style.pointerEvents = 'auto'
    } else {
      goUpButton.style.opacity = '0'
      goUpButton.style.pointerEvents = 'none'
    }
  })

  document.querySelector('.A_GoUp').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
}

export default goUp
