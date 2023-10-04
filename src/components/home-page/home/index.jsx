import React from 'react'
import ImgBackground from 'assets/images/png/home-img.png'
import { useNavigate } from 'react-router-dom'

const index = () => {

    const navigate = useNavigate()

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
                        Zamonaviy texnalogiyalar <br />
                        agentligi
                    </p>
                </div>
                <div className="main__btn">
                    <button onClick={() => navigate("/about")} className='main__btn__item'>
                        <span>Batafsil ma'lumot</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default index