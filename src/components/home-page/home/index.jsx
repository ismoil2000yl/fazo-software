import React from 'react'
import ImgBackground from 'assets/images/png/home-img.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const index = () => {

    const navigate = useNavigate()

    const { currentLangCode } = useSelector(state => state.system)

    return (
        <div className='main'>
            <ul className="circles">
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
                <div className="main__box">
                    <p className="main__box__title">
                        {
                            currentLangCode === "uz" ? "Zamonaviy texnalogiyalar" :
                                currentLangCode === "ru" ? "Современные технологии" :
                                    currentLangCode === "en" ? "Modern technologies" : ""
                        } <br />
                        {
                            currentLangCode === "uz" ? "agentligi" :
                                currentLangCode === "ru" ? "агентство" :
                                    currentLangCode === "en" ? "agency" : ""
                        }
                    </p>
                </div>
                <div className="main__btn">
                    <button onClick={() => navigate("/about")} className='main__btn__item'>
                        <span>
                            {
                                currentLangCode === "uz" ? "Batafsil ma'lumot" :
                                    currentLangCode === "ru" ? "Узнать больше" :
                                        currentLangCode === "en" ? "Learn more" : ""
                            }
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default index