import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const index = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const { currentLangCode } = useSelector(state => state.system)

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

    const prsAddress = JSON.parse(info?.address ? info.address : "{}")

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
                                <h1>
                                    {
                                        currentLangCode === "uz" ? "Rezume jo'natish" :
                                            currentLangCode === "ru" ? "Отправить резюме" :
                                                currentLangCode === "en" ? "Send resume" : ""
                                    }
                                </h1>
                                <p>
                                    {
                                        currentLangCode === "uz" ? "Agar siz Namangandagi eng yaxshi IT-kompaniyalardan birida ishlashni xohlasangiz, biz sizga quyidagi yo'nalishlarida ish o'rinlarini taklif qilamiz:" :
                                            currentLangCode === "ru" ? "Если вы хотите работать в одной из лучших ИТ-компаний Намангана, мы предлагаем вам работу по следующим направлениям:" :
                                                currentLangCode === "en" ? "If you want to work in one of the best IT companies in Namangan, we offer you jobs in the following areas:" : ""
                                    }
                                </p>
                                <p>
                                    {
                                        vakansiya[0] ? vakansiya.map(item => {
                                            return <span key={item.id}>
                                                {item.title} <br />
                                            </ span>
                                        }) : <span>
                                            {
                                                currentLangCode === "uz" ? "Xozircha bo'sh ish o'rni yo'q" :
                                                    currentLangCode === "ru" ? "На данный момент вакансий нет" :
                                                        currentLangCode === "en" ? "There are currently no vacancies" : ""
                                            }
                                        </span>
                                    }
                                </p>
                                <p>
                                    {
                                        currentLangCode === "uz" ? "Biz bo'sh ish o'rinlari uchun murojaat qilgan har bir nomzoddan xursandmiz. Sizni shaxsiy rivojlanish va kelajakka ishonchni kafolatlaydigan do'stona jamoamizda kutamiz!" :
                                            currentLangCode === "ru" ? "Мы приветствуем каждого кандидата, претендующего на вакансии. Ждем Вас в нашем дружном коллективе, который гарантирует личностное развитие и уверенность в завтрашнем дне!" :
                                                currentLangCode === "en" ? "We welcome every candidate who applies for the vacancies. We are waiting for you in our friendly team, which guarantees personal development and confidence in the future!" : ""
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="job__header__box__right">
                            <div className="job__header__box__right__info">
                                <p>
                                    {
                                        currentLangCode === "uz" ? "Manzil" :
                                            currentLangCode === "ru" ? "Адрес" :
                                                currentLangCode === "en" ? "Address" : ""
                                    }
                                </p>
                                <p>
                                    {
                                        prsAddress[currentLangCode]
                                    }
                                </p>
                                <div className="job__header__box__right__info__social">
                                    <h5>
                                        {
                                            currentLangCode === "uz" ? "E-mail" :
                                                currentLangCode === "ru" ? "Электронная почта" :
                                                    currentLangCode === "en" ? "E-mail" : ""
                                        }
                                    </h5>
                                    <h5>{info?.email}</h5>
                                </div>
                                <div className="job__header__box__right__info__social">
                                    <h5>
                                        {
                                            currentLangCode === "uz" ? "Telegram" :
                                                currentLangCode === "ru" ? "Телеграм" :
                                                    currentLangCode === "en" ? "Telegram" : ""
                                        }
                                    </h5>
                                    <h5>{info?.telegram}</h5>
                                </div>
                            </div>
                            <div className="job__header__box__right__number">
                                <p className="job__header__box__right__number__title">
                                    {
                                        currentLangCode === "uz" ? "Tel:" :
                                            currentLangCode === "ru" ? "Тел:" :
                                                currentLangCode === "en" ? "Tel:" : ""
                                    }
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
                            <h3>
                                {
                                    currentLangCode === "uz" ? "Resume" :
                                        currentLangCode === "ru" ? "Резюме" :
                                            currentLangCode === "en" ? "Resume" : ""
                                }
                            </h3>
                            <input type="file" className='job__body__form__resume__file' />
                            <button className='job__body__form__resume__btn'>
                                {
                                    currentLangCode === "uz" ? "Yuborish" :
                                        currentLangCode === "ru" ? "Отправка" :
                                            currentLangCode === "en" ? "Sending" : ""
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default index