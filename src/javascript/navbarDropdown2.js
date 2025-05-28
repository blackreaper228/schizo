document.addEventListener('DOMContentLoaded', () => {
  const articlesBtn = document.querySelector('#gensBtn')
  const subMenu = document.querySelector('#gens')
  const subMenuBetween = document.querySelector('#main_nav')

  let isHovered = false

  // articlesBtn.addEventListener('mouseenter', () => {
  //   subMenu.style.display = 'flex'
  // })

  // Добавляем отслеживание наведения на подменю
  subMenu.addEventListener('mouseenter', () => {
    isHovered = true
  })

  subMenuBetween.addEventListener('mouseenter', () => {
    isHovered = true
  })

  // Добавляем обработчики mouseleave для всех элементов
  subMenu.addEventListener('mouseleave', () => {
    isHovered = false
    setTimeout(() => {
      if (!isHovered) {
        subMenu.style.display = 'none'
      }
    }, 100)
  })

  subMenuBetween.addEventListener('mouseleave', () => {
    isHovered = false
    setTimeout(() => {
      if (!isHovered) {
        subMenu.style.display = 'none'
      }
    }, 100)
  })

  // articlesBtn.addEventListener('mouseleave', () => {
  //   isHovered = false
  //   setTimeout(() => {
  //     if (!isHovered) {
  //       subMenu.style.display = 'none'
  //     }
  //   }, 100)
  // })
})
