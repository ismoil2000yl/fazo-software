import React, { useState } from "react";
import IconFacebook from 'assets/images/png/facebook.png'
import IconTelegram from 'assets/images/png/telegram.png'
import IconInstagram from 'assets/images/png/instagram.png'
import IconLinkedin from 'assets/images/png/linkedin.png'
import IconGithub from 'assets/images/png/github.png'
import IconLogo from 'assets/images/png/Fazo 13-2.png'

const index = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={IconLogo} alt="" />
      </div>
      <div className="footer-body">
        <ul className="footer-body-social">
          <li className="footer-body-social-item">
            <a href="">
              <img src={IconFacebook} alt="" className="footer-body-social-item-img" />
            </a>
          </li>
          <li className="footer-body-social-item">
            <a href="">
              <img src={IconInstagram} alt="" className="footer-body-social-item-img" />
            </a>
          </li>
          <li className="footer-body-social-item">
            <a href="">
              <img src={IconTelegram} alt="" className="footer-body-social-item-img" />
            </a>
          </li>
          <li className="footer-body-social-item">
            <a href="">
              <img src={IconLinkedin} alt="" className="footer-body-social-item-img" />
            </a>
          </li>
          <li className="footer-body-social-item">
            <a href="">
              <img src={IconGithub} alt="" className="footer-body-social-item-img" />
            </a>
          </li>
        </ul>
        <ul className="footer-body-menu">
          <li className="footer-body-menu-item" onClick={() => { navigate('/portfolio'), setModalIsOpen(false) }}>
            <a className="footer-body-menu-item-link">Portfolio</a>
          </li>
          <li className="footer-body-menu-item" onClick={() => { navigate('/about'), setModalIsOpen(false) }}>
            <a className="footer-body-menu-item-link">Biz xaqimizda</a>
          </li>
          <li className="footer-body-menu-item" onClick={() => { navigate('/contact'), setModalIsOpen(false) }}>
            <a className="footer-body-menu-item-link">Bog'lanish</a>
          </li>
          <li className="footer-body-menu-item" onClick={() => { navigate('/services'), setModalIsOpen(false) }}>
            <a className="footer-body-menu-item-link">Xizmatlarimiz</a>
          </li>
          <li className="footer-body-menu-item" onClick={() => { navigate('/job'), setModalIsOpen(false) }}>
            <a className="footer-body-menu-item-link">Ish izlayapsizmi?</a>
          </li>
        </ul>
      </div>
      <div className="footer__info">
        <hr />
        <div className="footer__info__box">
          <h5>© 2023  “FAZO-SOFTWARE | info@fazo.uz</h5>
          <p>
            Barcha ishlar mualliflik huquqi bilan himoyalangan.
            Materiallardan nusxa ko'chirish va foydalanish faqat
            kompaniya ruxsati orqali amalga oshirilishi mumkin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default index;


{/* <ul className="social-network">
        <li className="social-network-item">
          <img src={IconTelegram} alt="" />
          <h4 className="social-network-item-title">Telegram</h4>
        </li>
        <li className="social-network-item">
          <img src={IconInstagram} alt="" />
          <h4 className="social-network-item-title">Instagram</h4>
        </li>
        <li className="social-network-item">
          <img src={IconFacebook} alt="" />
          <h4 className="social-network-item-title">Facebook</h4>
        </li>
        <li className="social-network-item">
          <img src={IconDiamond} alt="" />
          <h4 className="social-network-item-title">Diamond</h4>
        </li>
      </ul> */}