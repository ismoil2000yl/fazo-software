import React, { useEffect, useState } from 'react'
import ImgPhone from 'assets/images/png/about-phone.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import axios from 'axios'

const index = () => {

    const [info, setInfo] = useState({})
    const getInfo = async () => {
        const data = await axios.get("http://192.168.1.195:5055/company-details")
        setInfo(data?.data[0])
    }

    useEffect(() => {
        getInfo()
    }, [])

    return (
        <div className='about'>
            <div className="about__header">
                <ul className="circles about-circles">
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
                    <div className="about__header__title">
                        <h1>Kompaniya haqida</h1>
                    </div>
                </div>
            </div>
            <div className="about__body">
                <div className="about__body__box">
                    <div className="about__body__box__img">
                        <div className="about__body__box__img__item">
                            <LazyLoadImage
                                src={ImgPhone}
                                alt=""
                                effect="blur"
                                placeholderSrc={ImgPhone}
                            />
                        </div>
                    </div>
                    <div className="about__body__box__info">
                        <div className="container">
                            <p>
                                {info?.about}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index