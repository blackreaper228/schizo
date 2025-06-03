import React from 'react'
import '../index.css'

import Q_BurgerIcon from '../assets/svg/Q_BurgerIcon.svg'
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
          <img className="Q_BurgerIcon" src={Q_BurgerIcon} alt="menu" />
          <a
            href="https://schizofiles.ru"
            target="_blank"
            className="Q_LogoMobileLink"
          >
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
          <img className="Q_BurgerIcon" src={Q_BurgerIcon} alt="menu" />
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
          <img className="Q_BurgerIcon" src={Q_BurgerIcon} alt="menu" />
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
    </div>
  )
}

export default Header
