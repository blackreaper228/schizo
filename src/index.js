import './index.css'
import preloader from './javascript/preloader.js'
import burgerMenu from './javascript/burgerMenu.js'
import searchbarMobile from './javascript/searchbarMobile.js'
import navBtn from './javascript/navbarDropdown.js'
import navBtn2 from './javascript/navbarDropdown2.js'

import audioNew from './javascript/audio_new.js'
import logo3D from './javascript/logo-3D.js'
import goUp from './javascript/LandingGoUp.js'

import { mountHeader } from './javascript/initReact.js'
mountHeader()

document.addEventListener('DOMContentLoaded', () => {
  audioNew()
  logo3D()
  goUp()
})
