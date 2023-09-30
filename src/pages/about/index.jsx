import React from 'react'
import ImgPhone from 'assets/images/png/about-phone.png'

const index = () => {
    return (
        <div className='about'>
            <div className="about__header">
                <ul className="circles about-circles">
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
                    <div className="about__header__title">
                        <h1>Kompaniya haqida</h1>
                    </div>
                </div>
            </div>
            <div className="about__body">
                    <div className="about__body__box">
                        <div className="about__body__box__img">
                            <div className="about__body__box__img__item">
                                <img src={ImgPhone} alt="" />
                            </div>
                        </div>
                        <div className="about__body__box__info">
                            <div className="container">
                            <p>
                                "Fazo Software" Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Ad sequi corrupti voluptatum voluptate cupiditate voluptas
                                consequatur itaque reiciendis! Repudiandae mollitia voluptatibus,
                                id velit explicabo voluptas temporibus laboriosam aliquid sit alias.
                            </p>
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