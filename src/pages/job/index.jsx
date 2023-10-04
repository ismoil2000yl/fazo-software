import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const index = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const [disabledBtn, setDisabledBtn] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const telegramBotId = "6226001980:AAHEwlYCM-6IPkky8-TOfebSQdyGA-1ICAM"; // replace token with the Bot token you created
        const chatId = -1001804268604; // Instead of 1111, write the ID of the place where the message should go

        const telegramMessage = `
        Name: ${name}
        Phone: ${phone}
        Message: ${message}`;

        try {
            const response = await axios.post(
                `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
                {
                    chat_id: chatId,
                    text: telegramMessage,
                }
            );

            // console.log(response.data);

            // Reset form fields
            setName("")
            setPhone("")
            setMessage("");
        } catch (error) {
            console.error(error);
        }
    };

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
                    <form className="job__body__form" onSubmit={handleSubmit}>
                        <div className="job__body__form__input">
                            <input
                                type="text"
                                placeholder='Ismingiz...'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="job__body__form__input">
                            <input
                                type="text"
                                placeholder='Telefon...'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="job__body__form__input">
                            <input
                                type="text"
                                placeholder="O'zingiz xaqingizda yozing..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <div className="job__body__form__resume">
                            <h3>Resume:</h3>
                            <input type="file" className='job__body__form__resume__file' />
                            <button className='job__body__form__resume__btn'>Yuborish</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default index