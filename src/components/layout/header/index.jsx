import React from 'react'
import IconLogo from 'assets/images/png/Fazo 13.png'
import IconPhone from 'assets/images/png/phone.png'
import IconUz from 'assets/images/png/uz.png'
import IconRu from 'assets/images/png/ru.png'
import IconEng from 'assets/images/png/en.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from 'components/menu/modal'

const index = () => {

  const [lang, setLang] = useState({ img: IconUz, title: "Uz" });
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const navigate = useNavigate()


  return (
    <header className="header">
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
              <button className={'navbar__info__menu__btn'} onClick={() => setModalIsOpen(prev => !prev)}>
                <span className={`${modalIsOpen ? 'navbar__info__menu__btn__itemClick' : 'navbar__info__menu__btn__item'}`}></span>
                <span className={`${modalIsOpen ? 'navbar__info__menu__btn__itemClick' : 'navbar__info__menu__btn__item'}`}></span>
                <span className={`${modalIsOpen ? 'navbar__info__menu__btn__itemClick' : 'navbar__info__menu__btn__item'}`}></span>
              </button>
            </div>
          </div>
        </nav>
      </div>
      {/* <Menu modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} /> */}
      {modalIsOpen && <Modal
        setModalIsOpen={setModalIsOpen}
        modalIsOpen={modalIsOpen}
        lang={lang}
        setLang={setLang}
      />}
    </header>
  )
}

export default index