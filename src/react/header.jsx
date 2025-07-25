import React, { useState } from 'react'
import '../index.css'

import Q_BurgerIcon from '../assets/svg/Q_BurgerIcon.svg'
import Q_BurgerIconClose from '../assets/svg/Q_BurgerIconClose.svg'
import Q_SearchIconMobile from '../assets/svg/Q_SearchIconMobile.svg'
import Q_SearchIcon from '../assets/svg/Q_SearchIcon.svg'
import Q_LogoMobile from '../images/Q_LogoMobile.png'

const newsItems = [
  {
    text: 'Адренохром — эликсир вечной молодости знаменитостей ↗',
    href: './adrenochrome.html'
  },
  {
    text: '10 прогнозов для мира в 2030 году ↗',
    href: './ten-predictions.html'
  },
  {
    text: 'Вода — это дверь. Космос — это вода ↗',
    href: './water-is-door.html'
  },
  { text: 'НЛО на видео Пентагона ↗', href: './ufo-on-video.html' },
  {
    text: 'Влияние ЧАЭС на распространение ВИЧ ↗',
    href: './chernobyl-hiv.html'
  }
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isArticlesOpen, setIsArticlesOpen] = useState(false)
  const [isGensOpen, setIsGensOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)

    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const toggleArticles = () => {
    setIsArticlesOpen(!isArticlesOpen)
    setIsGensOpen(false) // Закрываем другое меню
  }

  const toggleGens = () => {
    setIsGensOpen(!isGensOpen)
    setIsArticlesOpen(false) // Закрываем другое меню
  }

  return (
    <div className="O_Header">
      <div className="A_HeaderNews">
        {[...Array(3)].map((_, i) => (
          <div key={i}>
            {newsItems.map((item, j) => (
              <a className="A_NewsLink" key={j} href={item.href}>
                {item.text}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="W_HeaderNavbarsWrap">
        {/* Главное меню */}
        <div className="M_HeaderNavbar" id="main_nav">
          <img
            className="Q_BurgerIcon"
            src={isMenuOpen ? Q_BurgerIconClose : Q_BurgerIcon}
            alt="menu"
            onClick={toggleMenu}
            style={{ cursor: 'pointer' }}
          />
          <a href="https://schizofiles.ru" className="Q_LogoMobileLink">
            <img className="Q_LogoMobile" src={Q_LogoMobile} alt="logo" />
          </a>
          <img
            className="Q_SearchIconMobile"
            src={Q_SearchIconMobile}
            alt="search"
          />

          <a href="./index.html" className="A_HeaderNavbarBtn">
            Главная
          </a>
          <div className="A_HeaderNavbarBtn" id="articles">
            Статьи
          </div>
          <a href="./predictions.html" className="A_HeaderNavbarBtn">
            Предсказание дня
          </a>
          <div className="A_HeaderNavbarBtn" id="gensBtn">
            Генераторы
          </div>
          <a href="./flat-earth.html" className="A_HeaderNavbarBtn">
            Карта истинной Земли
          </a>

          {/* 
          <div className="A_HeaderNavbarSearch">
            Поиск
            <img
              className="Q_SearchIcon"
              src={Q_SearchIcon}
              alt="search icon"
            />
          </div> */}
        </div>

        {/* Подменю Статьи */}
        <div className="M_HeaderNavbar invert">
          <img
            className="Q_BurgerIcon"
            src={isMenuOpen ? Q_BurgerIconClose : Q_BurgerIcon}
            alt="menu"
            onClick={toggleMenu}
            style={{ cursor: 'pointer' }}
          />
          <img className="Q_LogoMobile" src={Q_LogoMobile} alt="logo" />
          <img
            className="Q_SearchIconMobile"
            src={Q_SearchIconMobile}
            alt="search"
          />

          <a href="./bitie.html">
            <div className="A_HeaderNavbarBtn" id="articles_in">
              Бытие
            </div>
          </a>
          <a href="./kosmos.html">
            <div className="A_HeaderNavbarBtn" id="articles_in">
              Космос
            </div>
          </a>
          <a href="./proshloe.html">
            <div className="A_HeaderNavbarBtn" id="articles_in">
              Прошлое
            </div>
          </a>
        </div>

        {/* Подменю Генераторы */}
        <div className="M_HeaderNavbar invert Gen" id="gens">
          <img
            className="Q_BurgerIcon"
            src={isMenuOpen ? Q_BurgerIconClose : Q_BurgerIcon}
            alt="menu"
            onClick={toggleMenu}
            style={{ cursor: 'pointer' }}
          />
          <img className="Q_LogoMobile" src={Q_LogoMobile} alt="logo" />
          <img
            className="Q_SearchIconMobile"
            src={Q_SearchIconMobile}
            alt="search"
          />
          <a href="./encryptor.html">
            <div className="A_HeaderNavbarBtn" id="articles_in">
              Шифровщик
            </div>
          </a>
          <a href="./iceberg.html">
            <div className="A_HeaderNavbarBtn" id="articles_in">
              Айсберги
            </div>
          </a>
        </div>
      </div>

      {/* Бургер меню */}
      <div className={`O_BurgerMenu ${isMenuOpen ? 'active' : ''}`}>
        <div className="W_BurgerMenuContent">
          <a href="./test.html" className="A_HeaderNavbarBtn">
            Главная
          </a>

          <div
            className="A_HeaderNavbarBtn"
            id="ArticleMobile"
            onClick={toggleArticles}
            style={{ cursor: 'pointer' }}
          >
            Статьи
          </div>

          <div
            className="W_ArticlesDropdown"
            style={{ display: isArticlesOpen ? 'flex' : 'none' }}
            id="ArticlesDropdown"
          >
            <a href="./bitie.html" className="A_HeaderNavbarBtn">
              Бытие
            </a>
            <a href="./kosmos.html" className="A_HeaderNavbarBtn">
              Космос
            </a>
            <a href="./proshloe.html" className="A_HeaderNavbarBtn">
              Прошлое
            </a>
          </div>

          <a href="./flat-earth.html" className="A_HeaderNavbarBtn">
            Карта истинной Земли
          </a>

          <div
            className="A_HeaderNavbarBtn"
            id="GensMobile"
            onClick={toggleGens}
            style={{ cursor: 'pointer' }}
          >
            Генераторы
          </div>

          <div
            className="W_ArticlesDropdown"
            style={{ display: isGensOpen ? 'flex' : 'none' }}
            id="GensDropdown"
          >
            <a href="./encryptor.html" className="A_HeaderNavbarBtn">
              Шифровщик
            </a>
            <a href="./iceberg.html" className="A_HeaderNavbarBtn">
              Айсберги
            </a>
          </div>

          <a href="./predictions.html" className="A_HeaderNavbarBtn">
            Предсказание дня
          </a>
        </div>

        <div
          className="Q_BurgerMenuBG"
          id="burgerMenuBG-01"
          onClick={toggleMenu}
          style={{ cursor: 'pointer' }}
        ></div>
      </div>
    </div>
  )
}

export default Header
