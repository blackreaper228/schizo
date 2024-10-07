import './page.css'

import React from 'react'
import { createRoot } from 'react-dom/client'

import ComponentExample from './javascript/ComponentExample.jsx'
import { root } from 'postcss'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reactComponentRoot')
  const root = createRoot(container)
  root.render(
    <>
      <h1>Zdarova pacani</h1>
      <ComponentExample />
    </>
  )
})
