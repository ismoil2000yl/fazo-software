import React from 'react'

const index = () => {



    return (
        <div className='contact'>
            <div className="contact__header">
                <ul className="circles contact-circles">
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
                    <div className="contact__header__box">
                        <div className="contact__header__box__left">
                            <div className="contact__header__box__left__info">
                                <h1>kontaktlar</h1>
                                <p>
                                    Biz sizni saytimizda ko'rishdan xursandmiz va g'oyalaringizni xayotga tatbiq etishga tayyormiz
                                </p>
                            </div>
                        </div>
                        <div className="contact__header__box__right">
                            <div className="contact__header__box__right__info">
                                <p>Manzil</p>
                                <p>
                                    O'zbekiston, Namangan Viloyati, Namangan Shahri,
                                    Amir Temur koʻchasi, 101-uy. Sanoat(industralniy) kolleji birinchi qavati,
                                    IT School binosi, 5-xona
                                </p>
                                <div className="contact__header__box__right__info__social">
                                    <h5>E-mail</h5>
                                    <h5>info@fazo.uz</h5>
                                </div>
                                <div className="contact__header__box__right__info__social">
                                    <h5>Telegram</h5>
                                    <h5>@fazosoftware</h5>
                                </div>
                            </div>
                            <div className="contact__header__box__right__number">
                                <p className="contact__header__box__right__number__title">
                                    Telefonlar
                                </p>
                                <div className="contact__header__box__right__number__box">
                                    <h3>(90) 123-45-67</h3>
                                    <h3>(90) 123-45-67</h3>
                                    <h3>(90) 123-45-67</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact__body">
                <div className="contact__body__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d766704.1965547907!2d70.82901644058863!3d41.35369549891695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4b53b3d1aa1d%3A0xf01247f941cd093c!2sNamangan%20IT%20School!5e0!3m2!1suz!2s!4v1696106804379!5m2!1suz!2s"
                        width="1200"
                        height="400"
                        allowfullscreen
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title='Fazo Software'
                    ></iframe>
                </div>
                <div className="contact__box">
                    <div className="contact__box__info">
                        <h2 className='contact__box__info__title'>Fazo Software</h2>
                        <h3 className='contact__box__info__description contact__body__description'>
                            Sizning loyihangizni batafsil muhokama qilishga tayyormiz...!
                            Loyihangiz xaqida qisqacha ma'lumot bering. Biz sizga yordam beramiz.
                        </h3>
                    </div>
                    <div className="contact__box__form form">
                        <form action="#">
                            <h2 className='form-title'>Bizga xabar yuborish</h2>
                            <div className="form-fields">
                                <div className="form-group">
                                    <input type="text" className='form-group-input' placeholder='First Name' />
                                </div>
                                <div className="form-group">
                                    <input type="text" className='form-group-input' placeholder='Last Name' />
                                </div>
                                <div className="form-group">
                                    <input type="text" className='form-group-input' placeholder='Email' />
                                </div>
                                <div className="form-group">
                                    <input type="text" className='form-group-input' placeholder='Phone Number' />
                                </div>
                                <div className="form-group">
                                    <textarea name="message" className='form-group-input' placeholder='Write your message'></textarea>
                                </div>
                            </div>
                            <input type="submit" value={"Send message"} className="submit-button" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index