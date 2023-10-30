import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

const index = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const [disabledBtn, setDisabledBtn] = useState(false)

    const [vakansiya, setVakansiya] = useState([])
    const [info, setInfo] = useState({})

    const getData = async () => {
        const data = await axios.get("http://192.168.1.195:5055/vacancies/all")
        setVakansiya(data?.data)
    }

    const getInfo = async () => {
        const data = await axios.get("http://192.168.1.195:5055/company-details")
        setInfo(data?.data[0])
    }

    useEffect(() => {
        getData()
        getInfo()
    }, [])

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

            // Reset form fields
            setName("")
            setPhone("")
            setMessage("");
            toast.success("Xabar yuborildi")
        } catch (error) {
            console.error(error);
            toast.error("Xabar yuborilmadi...!")
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
                                    {
                                        vakansiya[0] ? vakansiya.map(item => {
                                            return <span key={item.id}>
                                                {item.title} <br />
                                            </ span>
                                        }) : <span>Xozircha bo'sh ish o'rni yo'q</span>
                                    }
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
                                    {info?.address}
                                </p>
                                <div className="job__header__box__right__info__social">
                                    <h5>E-mail</h5>
                                    <h5>{info?.email}</h5>
                                </div>
                                <div className="job__header__box__right__info__social">
                                    <h5>Telegram</h5>
                                    <h5>{info?.telegram}</h5>
                                </div>
                            </div>
                            <div className="job__header__box__right__number">
                                <p className="job__header__box__right__number__title">
                                    Telefonlar
                                </p>
                                <div className="job__header__box__right__number__box">
                                    <h3>{info?.phone}</h3>
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
                                required={true}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="job__body__form__input">
                            <input
                                type="number"
                                placeholder='Telefon...'
                                value={phone}
                                required={true}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="job__body__form__input">
                            <input
                                type="text"
                                placeholder="O'zingiz xaqingizda yozing..."
                                value={message}
                                required={true}
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