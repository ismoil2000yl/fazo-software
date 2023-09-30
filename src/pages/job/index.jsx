import React from 'react'

const index = () => {
    return (
        <div className='job'>
            <div className="job__header">
                <ul className="circles job-circles">
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
                    <div className="job__header__box">
                        <div className="job__header__box__left">
                            <div className="job__header__box__left__info">
                                <h1>Rezyume jo'natish</h1>
                                <p>
                                    Agar siz Namangandagi eng yaxshi IT-kompaniyalardan birida ishlashni xohlasangiz,
                                    biz sizga quyidagi yo'nalishlarida ish o'rinlarini taklif qilamiz:
                                </p>
                                <p>
                                    Front end (ReactJS) <br />
                                    Back-end(PHP) <br />
                                    UI/UX dizayneri <br />
                                    Loyihalar bo'yicha menejer (PM) <br />
                                    Mobil dasturchi (React Native) <br />
                                </p>
                                <p>
                                    Biz bo'sh ish o'rinlari uchun murojaat qilgan har bir nomzoddan xursandmiz.
                                    Sizni shaxsiy rivojlanish va kelajakka ishonchni kafolatlaydigan do'stona jamoamizda kutamiz!
                                </p>
                            </div>
                        </div>
                        <div className="job__header__box__right">
                            <div className="job__header__box__right__info">
                                <p>Manzil</p>
                                <p>
                                    O'zbekiston, Namangan Viloyati, Namangan Shahri,
                                    Amir Temur koʻchasi, 101-uy. Sanoat(industralniy) kolleji birinchi qavati,
                                    IT School binosi, 5-xona
                                </p>
                                <div className="job__header__box__right__info__social">
                                    <h5>E-mail</h5>
                                    <h5>info@fazo.uz</h5>
                                </div>
                                <div className="job__header__box__right__info__social">
                                    <h5>Telegram</h5>
                                    <h5>@fazosoftware</h5>
                                </div>
                            </div>
                            <div className="job__header__box__right__number">
                                <p className="job__header__box__right__number__title">
                                    Telefonlar
                                </p>
                                <div className="job__header__box__right__number__box">
                                    <h3>(90) 123-45-67</h3>
                                    <h3>(90) 123-45-67</h3>
                                    <h3>(90) 123-45-67</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="job__body">
                    <form className="job__body__form">
                        <div className="job__body__form__input">
                            <input type="text" placeholder='Ismingiz...' />
                        </div>
                        <div className="job__body__form__input">
                            <input type="text" placeholder='Telefon...' />
                        </div>
                        <div className="job__body__form__input">
                            <input type="text" placeholder="O'zingiz xaqingizda yozing..." />
                        </div>
                        <div className="job__body__form__resume">
                            <h3>Resume:</h3>
                            <input type="file" className='job__body__form__resume__file' />
                            <button className='job__body__form__resume__btn'>Yuborish</button>
                        </div>
                    </form>
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