document.addEventListener('DOMContentLoaded', () => {
  const searchIcon = document.querySelector('.Q_SearchIconMobile')
  const searchBar = document.querySelector('.O_SearchBar')
  const header = document.querySelector('.O_Header')
  const body = document.body

  const toggleSearch = () => {
    searchBar.classList.toggle('active')

    if (searchBar.classList.contains('active')) {
      body.style.overflow = 'hidden'
      // Скрываем хедер
      header.style.display = 'none'
    } else {
      body.style.overflow = ''
      // Показываем хедер
      header.style.display = ''
    }
  }

  searchIcon.addEventListener('click', toggleSearch)

  const closeButton = document.querySelector('.A_SearchBarClose')
  if (closeButton) {
    closeButton.addEventListener('click', toggleSearch)
  }

  const searchBarBG = document.querySelector('#burgerMenuBG-02')
  if (searchBarBG) {
    searchBarBG.addEventListener('click', toggleSearch)
  }
})
