import { LazyLoadImage } from 'react-lazy-load-image-component'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const index = () => {

    const { id } = useParams()
    const [item, setItem] = useState()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await axios.get(`http://192.168.1.195:5055/projects/${id}`)
        setItem(data?.data)
    }


    return (
        <div className='projects-info'>
            <div className="projects-info__header">
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
                    <div className="projects-info__header__title">
                        <h1>{item?.title}</h1>
                    </div>
                </div>
            </div>
            <div className="projects-info__body">
                <div className="container">
                    <div className="projects-info__body__box">
                        <div className="projects-info__body__box__img">
                            <LazyLoadImage
                                src={`http://192.168.1.195:5055/projects/${item?.image}`}
                                alt=""
                                effect="blur"
                                placeholderSrc={`http://192.168.1.195:5055/projects/${item?.image}`}
                                className='projects-info__body__box__img__item'
                            />
                        </div>
                        <div className="projects-info__body__box__link">
                            <h3>👇Dastur linki:👇</h3>
                            <a href={item?.link}>{item?.link}</a>
                        </div>
                        <div className="projects-info__body__box__description">
                            <p>
                                {item?.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index