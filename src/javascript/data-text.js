document.addEventListener('DOMContentLoaded', () => {
  const titleElements = document.querySelectorAll('h1, h2, h3') // Выбираем все h1, h2 и h3

  titleElements.forEach((titleElement) => {
    titleElement.setAttribute('data-text', titleElement.textContent) // Устанавливаем data-text
  })
})
