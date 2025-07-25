import React from 'react'
import { createRoot } from 'react-dom/client'
import Header from '../react/header.jsx'

export function mountHeader() {
  const navbar = document.getElementById('navbar-root')
  if (navbar) {
    const navbarRoot = createRoot(navbar)
    navbarRoot.render(<Header />)
  }
}
