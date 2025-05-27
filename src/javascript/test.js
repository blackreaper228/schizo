import '../index.css'
import preloader from './preloader.js'
import burgerMenu from './burgerMenu.js'
import searchbarMobile from './searchbarMobile.js'
import navBtn from './navbarDropdown.js'
import navBtn2 from './navbarDropdown2.js'

import audioNew from './audio_new.js'
import logo3D from './logo-3D.js'
import goUp from './LandingGoUp.js'

import React from 'react'
import { createRoot } from 'react-dom/client'
import Header from '../react/header.jsx'

// Отдельно монтируем Header
const navbar = document.getElementById('navbar-root')
if (navbar) {
  const navbarRoot = createRoot(navbar)
  navbarRoot.render(<Header />)
}

document.addEventListener('DOMContentLoaded', () => {
  audioNew()
  logo3D()
  goUp()
})
