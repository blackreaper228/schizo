import '../index.css'
import preloader from './preloader.js'
import burgerMenu from './burgerMenu.js'
import searchbarMobile from './searchbarMobile.js'
import navBtn from './navbarDropdown.js'
import navBtn2 from './navbarDropdown2.js'

import audioNew from './audio_new.js'
import logo3D from './logo-3D.js'
import goUp from './LandingGoUp.js'

import { mountHeader } from './initReact.js'
mountHeader()

document.addEventListener('DOMContentLoaded', () => {
  audioNew()
  logo3D()
  goUp()
})
