import React, { useEffect, useState } from "react";
import IconFacebook from 'assets/images/png/facebook.png'
import IconTelegram from 'assets/images/png/telegram.png'
import IconInstagram from 'assets/images/png/instagram.png'
import IconLinkedin from 'assets/images/png/linkedin.png'
import IconGithub from 'assets/images/png/github.png'
import IconLogo from 'assets/images/png/Fazo 13-2.png'
import axios from "axios";

const index = () => {


  const [links, setLinks] = useState([])

  const getData = async () => {
    const data = await axios.get("http://192.168.1.195:5055/links/all")
    setLinks(data?.data[0])
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={IconLogo} alt="" />
      </div>
      <div className="footer-body">
        <ul className="footer-body-social">
          <li className="footer-body-social-item">
            <a href={links?.facebook}>
              <img src={IconFacebook} alt="" className="footer-body-social-item-img" />
            </a>
          </li>
          <li className="footer-body-social-item">
            <a href={links?.instagram}>
              <img src={IconInstagram} alt="" className="footer-body-social-item-img" />
            </a>
          </li>
          <li className="footer-body-social-item">
            <a href={links?.telegram}>
              <img src={IconTelegram} alt="" className="footer-body-social-item-img" />
            </a>
          </li>
          <li className="footer-body-social-item">
            <a href={links?.linkedIn}>
              <img src={IconLinkedin} alt="" className="footer-body-social-item-img" />
            </a>
          </li>
          <li className="footer-body-social-item">
            <a href={links?.github}>
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
    </footer >
  );
};

export default index;