import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import IconPhone from 'assets/images/jpg/Artboard 2-100.jpg'
import IconLocation from 'assets/images/jpg/Artboard 5-100.jpg'
import IconWebSite from 'assets/images/jpg/Artboard 7-100.jpg'
import { useSelector } from 'react-redux'

const index = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")

    const { currentLangCode } = useSelector(state => state.system)

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
        <div className='contact-us' data-aos="zoom-in">
            <div className="container">
                <div className="contact-us-title" data-aos="fade-up">
                    <h1>
                        {
                            currentLangCode === "uz" ? "Biz bilan aloqa" :
                                currentLangCode === "ru" ? "Связаться с нами" :
                                    currentLangCode === "en" ? "Contact us" : ""
                        }
                    </h1>
                </div>
                <div className="contact__box">
                    <div className="contact__box__info">
                        <h2 className='contact__box__info__title'>
                            {
                                currentLangCode === "uz" ? "Biz bilan bog'lanish" :
                                    currentLangCode === "ru" ? "Связаться с нами" :
                                        currentLangCode === "en" ? "Contact us" : ""
                            }
                        </h2>
                        <h3 className='contact__box__info__description'>
                            {
                                currentLangCode === "uz" ? "Formani to'ldiring va bizning jamoamiz sizga 24 soat ichida javob beradi" :
                                    currentLangCode === "ru" ? "Заполните форму, и наша команда свяжется с вами в течение 24 часов." :
                                        currentLangCode === "en" ? "Fill out the form and our team will get back to you within 24 hours" : ""
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
                                        type="email"
                                        className='form-group-input'
                                        placeholder='Email'
                                        value={email}
                                        required={false}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="number"
                                        defaultValue={"+998"}
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