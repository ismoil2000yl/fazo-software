import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import axios from 'axios'

const index = () => {

    const navigate = useNavigate()
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await axios.get("http://192.168.1.195:5055/services/all")
        setData(data?.data)
    }

    return (
        <div className='services__div'>
            <div className="services__div__header">
                <ul className="circles projects-circles">
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
                    <div className="services__div__header__title">
                        <h1>Biz nima bilan shug'ullanamiz</h1>
                    </div>
                </div>
            </div>
            <div className="services__body">
                <div className="container">
                    <div className="services__box">
                        {
                            data ?
                                data.map(item => {
                                    return (
                                        <div className="services__box__card" data-aos="flip-left" onClick={() => navigate(`/service-info/${item.id}`)}>
                                            <div className="services__box__card__inbox">
                                                <h4 className="services__box__card__inbox__title">
                                                    {item.title}
                                                </h4>
                                                <p className="services__box__card__inbox__info">
                                                    {item.desc}
                                                </p>
                                            </div>
                                            <div className="services__box__card__cover">
                                                <div className="services__box__card__cover__front">
                                                    <div className='services__box__card__cover__front__box'>
                                                        <h4 className='services__box__card__cover__front__box__title'>    {item.title}
                                                        </h4>
                                                        <LazyLoadImage
                                                            src={`http://192.168.1.195:5055/services/${item?.image}`}
                                                            alt=""
                                                            effect="blur"
                                                            placeholderSrc={`http://192.168.1.195:5055/services/${item?.image}`}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="services__box__card__cover__back"></div>
                                            </div>
                                        </div>
                                    )
                                }) : <h1>Loading...</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index