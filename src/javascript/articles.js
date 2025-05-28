import '../index.css'
import burgerMenu from './burgerMenu.js'
import searchbarMobile from './searchbarMobile.js'
import navBtn from './navbarDropdown.js'
import navBtn2 from './navbarDropdown2.js'

import goUp from './LandingGoUp.js'
import goBack from './goBack.js'
import titleElements from './data-text.js'

import { mountHeader } from './initReact.js'
mountHeader()

document.addEventListener('DOMContentLoaded', () => {
  goUp()

  const copyElement = document.getElementById('copyLink')
  if (copyElement) {
    copyElement.addEventListener('click', () => {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert('Ссылка скопирована!'))
        .catch(() => alert('Не удалось скопировать ссылку.'))
    })
  }
})
