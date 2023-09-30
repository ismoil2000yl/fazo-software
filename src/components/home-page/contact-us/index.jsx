import React from 'react'
import IconPhone from 'assets/images/jpg/Artboard 2-100.jpg'
import IconLocation from 'assets/images/jpg/Artboard 5-100.jpg'
import IconWebSite from 'assets/images/jpg/Artboard 7-100.jpg'

const index = () => {
    return (
        <div className='contact-us' data-aos="zoom-in">
            <div className="container">
                <div className="contact-us-title" data-aos="fade-up">
                    <h1>Biz bilan aloqa</h1>
                </div>
                <div className="contact__box">
                    <div className="contact__box__info">
                        <h2 className='contact__box__info__title'>Biz bilan bog'lanish</h2>
                        <h3 className='contact__box__info__description'>Formani to'ldiring va bizning jamoamiz sizga 24 soat ichida javob beradi</h3>
                        <ul className='contact__box__info__details info-details'>
                            <li className='info-details-item'>
                                <img src={IconPhone} alt="" className='info-details-item-img' />
                                <span className='info-details-item-title'>Phone: </span> <a className='info-details-item-info'>+998 (90) 123-45-67</a>
                            </li>
                            <li className='info-details-item'>
                                <img src={IconWebSite} alt="" className='info-details-item-img' />
                                <span className='info-details-item-title'>Web Site: </span> <a className='info-details-item-info'>Fazo-software.uz</a>
                            </li>
                            <li className='info-details-item'>
                                <img src={IconLocation} alt="" className='info-details-item-img' />
                                <span className='info-details-item-title'>Location: </span> <a className='info-details-item-info'>IT Park</a>
                            </li>
                        </ul>
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