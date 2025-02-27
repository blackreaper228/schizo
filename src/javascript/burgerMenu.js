import Q_burgerIconClose from '../svg/Q_BurgerIconClose.svg'
import Q_burgerIcon from '../svg/Q_BurgerIcon.svg'

document.addEventListener('DOMContentLoaded', () => {
  const burgerIcon = document.querySelector('.Q_BurgerIcon')
  const burgerMenu = document.querySelector('.O_BurgerMenu')
  const burgerMenuBG = document.querySelector('.O_BurgerMenuBG')

  const toggleMenu = () => {
    burgerMenu.classList.toggle('active')

    if (burgerMenu.classList.contains('active')) {
      burgerIcon.src = Q_burgerIconClose

      document.body.style.overflow = 'hidden'
    } else {
      burgerIcon.src = Q_burgerIcon
      document.body.style.overflow = ''
    }
  }

  burgerIcon.addEventListener('click', toggleMenu)
  burgerMenuBG.addEventListener('click', toggleMenu)
})
