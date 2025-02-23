const goUp = () => {
  window.addEventListener('scroll', () => {
    const goUpButton = document.querySelector('.A_GoUp')
    const halfPageHeight = document.documentElement.scrollHeight / 2

    if (window.scrollY > halfPageHeight) {
      goUpButton.style.opacity = '1'
      goUpButton.style.pointerEvents = 'auto' // Делаем кнопку кликабельной
    } else {
      goUpButton.style.opacity = '0'
      goUpButton.style.pointerEvents = 'none' // Убираем возможность клика
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
