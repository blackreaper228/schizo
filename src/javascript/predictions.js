import '../index.css'
import burgerMenu from './burgerMenu.js'
import searchbarMobile from './searchbarMobile.js'
import navBtn from './navbarDropdown.js'
import navBtn2 from './navbarDropdown2.js'
import titleElements from './data-text.js'

import goUp from './LandingGoUp.js'

import { mountHeader } from './initReact.js'
mountHeader()

document.addEventListener('DOMContentLoaded', () => {
  goUp()
})
