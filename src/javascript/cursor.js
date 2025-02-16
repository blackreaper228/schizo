import cursorImg from '../cursor.png'
import cursorHoverImg from '../cursor-hover.png'
import cursorPressedImg from '../cursor-pressed.png'

// cursor

export function initCursor() {
  const cursor = document.querySelector('.cursor')

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`
    cursor.style.top = `${e.clientY}px`
  })

  let isHovering = false

  document.querySelectorAll('.cursorHover').forEach((element) => {
    element.addEventListener('mouseenter', () => {
      isHovering = true
      cursor.style.backgroundImage = `url(${cursorHoverImg})`
    })

    element.addEventListener('mouseleave', () => {
      isHovering = false
      cursor.style.backgroundImage = `url(${cursorImg})`
    })
  })

  // Состояние "pressed"
  document.addEventListener('mousedown', () => {
    cursor.style.backgroundImage = `url(${cursorPressedImg})` // Меняем на нажатый курсор
  })

  document.addEventListener('mouseup', () => {
    if (isHovering) {
      cursor.style.backgroundImage = `url(${cursorHoverImg})` // Если курсор над элементом — вернуть hover
    } else {
      cursor.style.backgroundImage = `url(${cursorImg})` // Иначе вернуть стандартный
    }
  })
}
