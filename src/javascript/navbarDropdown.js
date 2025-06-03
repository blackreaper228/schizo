document.addEventListener('DOMContentLoaded', () => {
  const articlesBtn = document.querySelector('#articles')
  const subMenu = document.querySelector('.M_HeaderNavbar.invert')
  const subMenuBetween = document.querySelector('#main_nav')
  const ArticleMobile = document.querySelector('#ArticleMobile')
  const ArticlesDropdown = document.querySelector('#ArticlesDropdown')
  const GensMobile = document.querySelector('#GensMobile')
  // const GensDropdown = document.querySelector('#GensDropdown')

  let isHovered = false
  let isArticlesClicked = false
  let isGensClicked = false

  articlesBtn.addEventListener('mouseenter', () => {
    subMenu.style.display = 'flex'
  })

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

  articlesBtn.addEventListener('mouseleave', () => {
    isHovered = false
    setTimeout(() => {
      if (!isHovered) {
        subMenu.style.display = 'none'
      }
    }, 100)
  })

  ArticleMobile.addEventListener('click', () => {
    if (!isArticlesClicked) {
      isArticlesClicked = true
      ArticlesDropdown.style.display = 'flex'
    } else {
      isArticlesClicked = false
      ArticlesDropdown.style.display = 'none'
    }
  })

  // GensMobile.addEventListener('click', () => {
  //   if (!isGensClicked) {
  //     isGensClicked = true
  //     GensDropdown.style.display = 'flex'
  //   } else {
  //     isGensClicked = false
  //     GensDropdown.style.display = 'none'
  //   }
  // })
})
