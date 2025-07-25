// console.log('Burger menu script loaded')

// import Q_burgerIconClose from '../svg/Q_BurgerIconClose.svg'
// import Q_burgerIcon from '../svg/Q_BurgerIcon.svg'

// function showSuccessModal(message = 'Успешно!') {
//   alert(message)
// }

// document.addEventListener('DOMContentLoaded', () => {
//   // const burgerIcon = document.querySelector('.Q_BurgerIcon')
//   const burgerMenu = document.querySelector('.O_BurgerMenu')
//   const burgerIcon = document.querySelector('#burger-icon-main')

//   const burgerMenuBG = document.querySelector('#burgerMenuBG-01')

//   const toggleMenu = (e) => {
//     // Убираем preventDefault() - он блокируется браузером
//     // e.preventDefault()
//     e.stopPropagation()

//     burgerMenu.classList.toggle('active')
//     showSuccessModal('Операция выполнена успешно!')

//     if (burgerMenu.classList.contains('active')) {
//       burgerIcon.src = Q_burgerIconClose
//       document.body.style.overflow = 'hidden'
//     } else {
//       burgerIcon.src = Q_burgerIcon
//       document.body.style.overflow = ''
//     }
//   }

//   // Используем только click событие для мобильных
//   burgerIcon.addEventListener('click', toggleMenu)

//   burgerMenuBG.addEventListener('click', toggleMenu)
// })
