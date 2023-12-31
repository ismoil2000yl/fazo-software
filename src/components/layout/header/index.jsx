import React from 'react'
import IconLogo from 'assets/images/png/Fazo 13.png'
import IconPhone from 'assets/images/png/phone.png'
import IconUz from 'assets/images/png/uz.png'
import IconRu from 'assets/images/png/ru.png'
import IconEng from 'assets/images/png/en.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from 'store/system'
import { useEffect } from 'react'
import axios from 'axios'

const index = () => {

  const [lang, setLang] = useState({ img: IconUz, title: "uz" });
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [info, setInfo] = useState({})

  const getInfo = async () => {
    const data = await axios.get("http://192.168.1.195:5055/company-details")
    setInfo(data?.data[0])
  }

  useEffect(() => {
    getInfo()
    dispatch(changeLanguage(lang.title))
  }, [lang])

  const { currentLangCode } = useSelector(state => state.system)

  const clickMenu = () => {
    document.querySelector('.navigation').classList.toggle('activeMenu')
    document.querySelector('.toggle').classList.toggle('active')
  }

  const removeMenu = () => {
    document.querySelector('.navigation').classList.remove('activeMenu')
    document.querySelector('.toggle').classList.remove('active')
  }

  return (
    <header className="header">
      <div className="container">
        <nav className='navbar'>
          <div className="navbar__logo" onClick={() => navigate('/')}>
            <div className="navbar__logo__item">
              <img src={IconLogo} className="navbar__logo__img" alt="" />
            </div>
            <h1 className='navbar__logo__items'>azo Software</h1>
          </div>
          <div className="navbar__info">
            <div className="navbar__info__phone">
              <div className="navbar__info__phone__img">
                <img src={IconPhone} alt="" className='navbar__info__phone__img__item' />
              </div>
              <h2 className="navbar__info__phone__number">{info?.phone}</h2>
            </div>
            <div className="dropdown">
              <button className="dropbtn">
                <img src={lang.img} className="dropbtn__icon" alt="" />
              </button>
              <div className="dropdown-content">
                <a href="#" onClick={() => setLang({ img: IconUz, title: "uz" })}>
                  <img src={IconUz} alt="" />
                  <span>Uz</span>
                </a>
                <a href="#" onClick={() => setLang({ img: IconRu, title: "ru" })}>
                  <img src={IconRu} alt="" />
                  <span>Ru</span>
                </a>
                <a href="#" onClick={() => setLang({ img: IconEng, title: "en" })}>
                  <img src={IconEng} alt="" />
                  <span>Eng</span>
                </a>
              </div>
            </div>
            <div className="navbar__info__menu">
              <h3 className='navbar__info__menu__title'>Menu:</h3>
              <button className={'toggle'} onClick={clickMenu}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </nav>
        <div className="navigation">
          <nav className="menu-nav">
            <ul className="menu-nav-ul">
              <li className="menu-nav-ul-li" onClick={() => { navigate('/portfolio'), removeMenu() }}>
                <a className="menu-nav-ul-li-a">
                  {
                    currentLangCode === "uz" ? "Portfolio" :
                      currentLangCode === "ru" ? "Портфолио" :
                        currentLangCode === "en" ? "Projects" : ""
                  }
                </a>
              </li>
              <li className="menu-nav-ul-li" onClick={() => { navigate('/about'), removeMenu() }}>
                <a className="menu-nav-ul-li-a">
                  {
                    currentLangCode === "uz" ? "Biz xaqimizda" :
                      currentLangCode === "ru" ? "О нас" :
                        currentLangCode === "en" ? "About us" : ""
                  }
                </a>
              </li>
              <li className="menu-nav-ul-li" onClick={() => { navigate('/contact'), removeMenu() }}>
                <a className="menu-nav-ul-li-a">
                  {
                    currentLangCode === "uz" ? "Bog'lanish" :
                      currentLangCode === "ru" ? "Связь" :
                        currentLangCode === "en" ? "Contact us" : ""
                  }
                </a>
              </li>
              <li className="menu-nav-ul-li" onClick={() => { navigate('/services'), removeMenu() }}>
                <a className="menu-nav-ul-li-a">
                  {
                    currentLangCode === "uz" ? "Xizmatlarimiz" :
                      currentLangCode === "ru" ? "Наши сервисы" :
                        currentLangCode === "en" ? "Our Services" : ""
                  }
                </a>
              </li>
              <li className="menu-nav-ul-li" onClick={() => { navigate('/job'), removeMenu() }}>
                <a className="menu-nav-ul-li-a">
                  {
                    currentLangCode === "uz" ? "Ish izlayapsizmi?" :
                      currentLangCode === "ru" ? "Ты ищешь работу?" :
                        currentLangCode === "en" ? "Are you looking for a job?" : ""
                  }
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default index