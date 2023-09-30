import React from 'react'
import IconFront from 'assets/images/png/frontend.png'
import IconBackend from 'assets/images/png/backend2.png'
import IconWebDesign from 'assets/images/png/web-design.png'
import IconMobileDesign from 'assets/images/png/mobile-design.png'
import IconGraphicDesign from 'assets/images/png/graphic-design.png'
import IconAndroid from 'assets/images/png/android.png'
import IconIphone from 'assets/images/png/iphone.png'
import IconRobot from 'assets/images/png/robot.png'
import { useNavigate } from 'react-router-dom'

const index = () => {

    const navigate = useNavigate()

    return (
        <div className='services__div'>
            <div className="services__div__header">
                <ul className="circles services-circles">
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
                <div className="container">
                    <div className="services__div__header__title">
                        <h1>Biz nima bilan shug'ullanamiz</h1>
                    </div>
                </div>
            </div>
            <div className="services__body">
                <div className="container">
                    <div className="services__box">
                        <div className="services__box__card" data-aos="flip-left" onClick={() => navigate('/service-info/frontend')}>
                            <div className="services__box__card__inbox">
                                <h4 className="services__box__card__inbox__title">
                                    Frontend
                                </h4>
                                <p className="services__box__card__inbox__info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Possimus libero incidunt quia aliquid tempora deserunt
                                    illum tenetur. Doloremque minus assumenda, totam dignissimos
                                    odio earum repudiandae eum? Et adipisci dolorem inventore?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="services__box__card__cover">
                                <div className="services__box__card__cover__front">
                                    <div className='services__box__card__cover__front__box'>
                                        <h4 className='services__box__card__cover__front__box__title'>Frontend</h4>
                                        <img src={IconFront} alt="" />
                                    </div>
                                </div>
                                <div className="services__box__card__cover__back"></div>
                            </div>
                        </div>
                        <div className="services__box__card" data-aos="flip-left" onClick={() => navigate('/service-info/backend')}>
                            <div className="services__box__card__inbox">
                                <h4 className="services__box__card__inbox__title">
                                    Backend
                                </h4>
                                <p className="services__box__card__inbox__info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Possimus libero incidunt quia aliquid tempora deserunt
                                    illum tenetur. Doloremque minus assumenda, totam dignissimos
                                    odio earum repudiandae eum? Et adipisci dolorem inventore?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Possimus libero incidunt quia aliquid tempora deserunt
                                    illum tenetur. Doloremque minus assumenda, totam dignissimos
                                    odio earum repudiandae eum? Et adipisci dolorem inventore?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Possimus libero incidunt quia aliquid tempora deserunt
                                    illum tenetur. Doloremque minus assumenda, totam dignissimos
                                    odio earum repudiandae eum? Et adipisci dolorem inventore?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Possimus libero incidunt quia aliquid tempora deserunt
                                    illum tenetur. Doloremque minus assumenda, totam dignissimos
                                    odio earum repudiandae eum? Et adipisci dolorem inventore?
                                </p>
                            </div>
                            <div className="services__box__card__cover">
                                <div className="services__box__card__cover__front">
                                    <div className='services__box__card__cover__front__box'>
                                        <h4 className='services__box__card__cover__front__box__title'>Backend</h4>
                                        <img src={IconBackend} alt="" />
                                    </div>
                                </div>
                                <div className="services__box__card__cover__back"></div>
                            </div>
                        </div>
                        <div className="services__box__card" data-aos="flip-left" onClick={() => navigate('/service-info/web-design')}>
                            <div className="services__box__card__inbox">
                                <h4 className="services__box__card__inbox__title">
                                    Web Design
                                </h4>
                                <p className="services__box__card__inbox__info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Possimus libero incidunt quia aliquid tempora deserunt
                                    illum tenetur. Doloremque minus assumenda, totam dignissimos
                                    odio earum repudiandae eum? Et adipisci dolorem inventore?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="services__box__card__cover">
                                <div className="services__box__card__cover__front">
                                    <div className='services__box__card__cover__front__box'>
                                        <h4 className='services__box__card__cover__front__box__title'>Web Design</h4>
                                        <img src={IconWebDesign} alt="" />
                                    </div>
                                </div>
                                <div className="services__box__card__cover__back"></div>
                            </div>
                        </div>
                        <div className="services__box__card" data-aos="flip-left" onClick={() => navigate('/service-info/mobile-design')}>
                            <div className="services__box__card__inbox">
                                <h4 className="services__box__card__inbox__title">
                                    Mobile Design
                                </h4>
                                <p className="services__box__card__inbox__info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Possimus libero incidunt quia aliquid tempora deserunt
                                    illum tenetur. Doloremque minus assumenda, totam dignissimos
                                    odio earum repudiandae eum? Et adipisci dolorem inventore?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="services__box__card__cover">
                                <div className="services__box__card__cover__front">
                                    <div className='services__box__card__cover__front__box'>
                                        <h4 className='services__box__card__cover__front__box__title'>Mobile Design</h4>
                                        <img src={IconMobileDesign} alt="" />
                                    </div>
                                </div>
                                <div className="services__box__card__cover__back"></div>
                            </div>
                        </div>
                        <div className="services__box__card" data-aos="flip-left" onClick={() => navigate('/service-info/graphic-design')}>
                            <div className="services__box__card__inbox">
                                <h4 className="services__box__card__inbox__title">
                                    Graphic Design
                                </h4>
                                <p className="services__box__card__inbox__info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Possimus libero incidunt quia aliquid tempora deserunt
                                    illum tenetur. Doloremque minus assumenda, totam dignissimos
                                    odio earum repudiandae eum? Et adipisci dolorem inventore?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="services__box__card__cover">
                                <div className="services__box__card__cover__front">
                                    <div className='services__box__card__cover__front__box'>
                                        <h4 className='services__box__card__cover__front__box__title'>Graphic Design</h4>
                                        <img src={IconGraphicDesign} alt="" />
                                    </div>
                                </div>
                                <div className="services__box__card__cover__back"></div>
                            </div>
                        </div>
                        <div className="services__box__card" data-aos="flip-left" onClick={() => navigate('/service-info/android')}>
                            <div className="services__box__card__inbox">
                                <h4 className="services__box__card__inbox__title">
                                    Android
                                </h4>
                                <p className="services__box__card__inbox__info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Possimus libero incidunt quia aliquid tempora deserunt
                                    illum tenetur. Doloremque minus assumenda, totam dignissimos
                                    odio earum repudiandae eum? Et adipisci dolorem inventore?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="services__box__card__cover">
                                <div className="services__box__card__cover__front">
                                    <div className='services__box__card__cover__front__box'>
                                        <h4 className='services__box__card__cover__front__box__title'>Android</h4>
                                        <img src={IconAndroid} alt="" />
                                    </div>
                                </div>
                                <div className="services__box__card__cover__back"></div>
                            </div>
                        </div>
                        <div className="services__box__card" data-aos="flip-left" onClick={() => navigate('/service-info/ios')}>
                            <div className="services__box__card__inbox">
                                <h4 className="services__box__card__inbox__title">
                                    IOS
                                </h4>
                                <p className="services__box__card__inbox__info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Possimus libero incidunt quia aliquid tempora deserunt
                                    illum tenetur. Doloremque minus assumenda, totam dignissimos
                                    odio earum repudiandae eum? Et adipisci dolorem inventore?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="services__box__card__cover">
                                <div className="services__box__card__cover__front">
                                    <div className='services__box__card__cover__front__box'>
                                        <h4 className='services__box__card__cover__front__box__title'>IOS</h4>
                                        <img src={IconIphone} alt="" />
                                    </div>
                                </div>
                                <div className="services__box__card__cover__back"></div>
                            </div>
                        </div>
                        <div className="services__box__card" data-aos="flip-left" onClick={() => navigate('/service-info/robot-technology')}>
                            <div className="services__box__card__inbox">
                                <h4 className="services__box__card__inbox__title">
                                    Robot Technology
                                </h4>
                                <p className="services__box__card__inbox__info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Possimus libero incidunt quia aliquid tempora deserunt
                                    illum tenetur. Doloremque minus assumenda, totam dignissimos
                                    odio earum repudiandae eum? Et adipisci dolorem inventore?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="services__box__card__cover">
                                <div className="services__box__card__cover__front">
                                    <div className='services__box__card__cover__front__box'>
                                        <h4 className='services__box__card__cover__front__box__title'>Robot Technology</h4>
                                        <img src={IconRobot} alt="" />
                                    </div>
                                </div>
                                <div className="services__box__card__cover__back"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about__info">
                <hr />
                <div className="about__info__box">
                    <h5>© 2023  “FAZO-SOFTWARE | info@fazo.uz</h5>
                    <p>
                        Barcha ishlar mualliflik huquqi bilan himoyalangan.
                        Materiallardan nusxa ko'chirish va foydalanish faqat
                        kompaniya ruxsati orqali amalga oshirilishi mumkin
                    </p>
                </div>
            </div>
        </div>
    )
}

export default index