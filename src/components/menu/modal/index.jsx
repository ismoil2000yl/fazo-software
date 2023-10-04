import React, { useState } from 'react'
import Backdrop from 'components/menu/backdrop'
import { useNavigate } from 'react-router-dom'
import IconLogo from 'assets/images/png/Fazo 13.png'
import IconPhone from 'assets/images/png/phone.png'
import IconUz from 'assets/images/png/uz.png'
import IconRu from 'assets/images/png/ru.png'
import IconEng from 'assets/images/png/en.png'
import { useEffect } from 'react'

const index = ({ setModalIsOpen, modalIsOpen, lang, setLang }) => {

  const navigate = useNavigate()

  return (
    <>
      <Backdrop />
      <div className={'modal'}>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="modal-header">
          <div className="container">
            <nav className='navbar'>
              <div className="navbar__logo" onClick={() => navigate('/')}>
                <div className="navbar__logo__item">
                  <img src={IconLogo} alt="" className="navbar__logo__img" />
                </div>
                <h1 className='navbar__logo__items'>azo Software</h1>
              </div>
              <div className="navbar__info">
                <div className="navbar__info__phone">
                  <div className="navbar__info__phone__img">
                    <img src={IconPhone} alt="" className='navbar__info__phone__img__item' />
                  </div>
                  <h2 className="navbar__info__phone__number">+998 (90) 123-45-67</h2>
                </div>
                <div className="dropdown">
                  <button className="dropbtn">
                    <img src={lang.img} className="dropbtn__icon" alt="" />
                  </button>
                  <div className="dropdown-content">
                    <a href="#" onClick={() => setLang({ img: IconUz, title: "Uz" })}>
                      <img src={IconUz} alt="" />
                      <span>Uz</span>
                    </a>
                    <a href="#" onClick={() => setLang({ img: IconRu, title: "Ru" })}>
                      <img src={IconRu} alt="" />
                      <span>Ru</span>
                    </a>
                    <a href="#" onClick={() => setLang({ img: IconEng, title: "Eng" })}>
                      <img src={IconEng} alt="" />
                      <span>Eng</span>
                    </a>
                  </div>
                </div>
                <div className="navbar__info__menu">
                  <h3 className='navbar__info__menu__title'>Menu:</h3>
                  <button className='closeBtn' onClick={() => setModalIsOpen(prev => !prev)}>
                    <span>&times;</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="modal-body">
          <div className="container">
            <div className="modal-body-box">
              <ul className="modal-body-box-menu"  data-aos="fade-right">
                <li className="modal-body-box-menu-item" onClick={() => { navigate('/portfolio'), setModalIsOpen(false) }}>
                  <a className="modal-body-box-menu-item-link">Portfolio</a>
                </li>
                <li className="modal-body-box-menu-item" onClick={() => { navigate('/about'), setModalIsOpen(false) }}>
                  <a className="modal-body-box-menu-item-link">Biz xaqimizda</a>
                </li>
                <li className="modal-body-box-menu-item" onClick={() => { navigate('/contact'), setModalIsOpen(false) }}>
                  <a className="modal-body-box-menu-item-link">Bog'lanish</a>
                </li>
                <li className="modal-body-box-menu-item" onClick={() => { navigate('/services'), setModalIsOpen(false) }}>
                  <a className="modal-body-box-menu-item-link">Xizmatlarimiz</a>
                </li>
                <li className="modal-body-box-menu-item" onClick={() => { navigate('/job'), setModalIsOpen(false) }}>
                  <a className="modal-body-box-menu-item-link">Ish izlayapsizmi?</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index