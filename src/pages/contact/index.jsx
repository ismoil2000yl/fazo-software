import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const index = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")
    const [info, setInfo] = useState({})
    const { currentLangCode } = useSelector(state => state.system)

    const getData = async () => {
        const data = await axios.get("http://192.168.1.195:5055/company-details")
        setInfo(data?.data[0])
    }
    
    const prsAddress = JSON.parse(info?.address ? info.address : "{}")

    useEffect(() => {
        getData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const telegramBotId = "6226001980:AAHEwlYCM-6IPkky8-TOfebSQdyGA-1ICAM"; // replace token with the Bot token you created
        const chatId = -1001804268604; // Instead of 1111, write the ID of the place where the message should go

        const telegramMessage = `
        First Name: ${firstName}
        Last Name: ${lastName}
        E-mail: ${email}
        Phone Number: ${phoneNumber}
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
            setFirstName("");
            setLastName("");
            setPhoneNumber("");
            setEmail("");
            setMessage("");
            toast.success("Xabar yuborildi")
        } catch (error) {
            console.error(error);
            toast.error("Xabar yuborilmadi...!")
        }
    };


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
                                <h1>
                                    {
                                        currentLangCode === "uz" ? "kontaktlar" :
                                            currentLangCode === "ru" ? "контакты" :
                                                currentLangCode === "en" ? "contacts" : ""
                                    }
                                </h1>
                                <p>
                                    {
                                        currentLangCode === "uz" ? "Biz sizni saytimizda ko'rishdan xursandmiz va g'oyalaringizni xayotga tatbiq etishga tayyormiz" :
                                            currentLangCode === "ru" ? "Мы рады видеть Вас на нашем сайте и готовы реализовать Ваши идеи" :
                                                currentLangCode === "en" ? "We are happy to see you on our site and are ready to implement your ideas" : ""
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="contact__header__box__right">
                            <div className="contact__header__box__right__info">
                                <p>
                                    {
                                        currentLangCode === "uz" ? "Manzil:" :
                                            currentLangCode === "ru" ? "Адрес:" :
                                                currentLangCode === "en" ? "Address:" : ""
                                    }
                                </p>
                                <p>
                                    {
                                        prsAddress[currentLangCode]
                                    }
                                </p>
                                <div className="contact__header__box__right__info__social">
                                    <h5>
                                        {
                                            currentLangCode === "uz" ? "E-mail:" :
                                                currentLangCode === "ru" ? "Электронная почта:" :
                                                    currentLangCode === "en" ? "E-mail:" : ""
                                        }
                                    </h5>
                                    <h5>{info?.email}</h5>
                                </div>
                                <div className="contact__header__box__right__info__social">
                                    <h5>
                                        {
                                            currentLangCode === "uz" ? "Telegram:" :
                                                currentLangCode === "ru" ? "Телеграм:" :
                                                    currentLangCode === "en" ? "Telegram:" : ""
                                        }
                                    </h5>
                                    <h5>{info?.telegram}</h5>
                                </div>
                            </div>
                            <div className="contact__header__box__right__number">
                                <p className="contact__header__box__right__number__title">
                                    {
                                        currentLangCode === "uz" ? "Tel:" :
                                            currentLangCode === "ru" ? "Тел:" :
                                                currentLangCode === "en" ? "Tel:" : ""
                                    }
                                </p>
                                <div className="contact__header__box__right__number__box">
                                    <h3>{info?.phone}</h3>
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
                            {
                                currentLangCode === "uz" ? "Sizning loyihangizni batafsil muhokama qilishga tayyormiz...! Loyihangiz xaqida qisqacha ma'lumot bering. Biz sizga yordam beramiz." :
                                    currentLangCode === "ru" ? "Мы готовы детально обсудить Ваш проект...! Кратко опишите свой проект. Мы поможем тебе." :
                                        currentLangCode === "en" ? "We are ready to discuss your project in detail...! Briefly describe your project. We will help you." : ""
                            }
                        </h3>
                    </div>
                    <div className="contact__box__form form">
                        <form onSubmit={handleSubmit}>
                            <h2 className='form-title'>
                                {
                                    currentLangCode === "uz" ? "Bizga xabar yuborish" :
                                        currentLangCode === "ru" ? "Отправьте нам сообщение" :
                                            currentLangCode === "en" ? "Send us a message" : ""
                                }
                            </h2>
                            <div className="form-fields">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className='form-group-input'
                                        placeholder='First Name'
                                        value={firstName}
                                        required={true}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className='form-group-input'
                                        placeholder='Last Name'
                                        value={lastName}
                                        required={true}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className='form-group-input'
                                        placeholder='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="number"
                                        className='form-group-input'
                                        placeholder='Phone Number'
                                        value={phoneNumber}
                                        required={true}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        className='form-group-input'
                                        placeholder='Write your message'
                                        value={message}
                                        required={true}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* <input
                                type="submit"
                                value={"Send message"}
                                className="submit-button"
                            /> */}
                            <button className='submit-button' type='submit'>
                                {
                                    currentLangCode === "uz" ? "Xabar yuborish" :
                                        currentLangCode === "ru" ? "Отправить сообщение" :
                                            currentLangCode === "en" ? "Send a message" : ""
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index