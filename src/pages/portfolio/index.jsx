import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import axios from 'axios'
import { useSelector } from 'react-redux'

const index = () => {

    const navigate = useNavigate()
    const [projectMenu, setProjectMenu] = useState([])
    const [data, setData] = useState([])
    const [btnId, setBtnId] = useState('')
    const { currentLangCode } = useSelector(state => state.system)

    useEffect(() => {
        getProjectData()
        getData()
    }, [])

    const getProjectData = async () => {
        const data = await axios.get("http://192.168.1.195:5055/services/all")
        setProjectMenu(data?.data)
    }

    const getData = async () => {
        const data = await axios.get("http://192.168.1.195:5055/projects/all")
        setData(data?.data)
    }
    return (
        <div className='portfolio'>
            <div className="portfolio__header">
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
                    <div className="portfolio__header__title">
                        <h1>
                            {
                                currentLangCode === "uz" ? "Bizning loyihalarimiz" :
                                    currentLangCode === "ru" ? "Наши проекты" :
                                        currentLangCode === "en" ? "Our projects" : ""
                            }
                        </h1>
                    </div>
                </div>
            </div>
            <div className="portfolio__body">
                <div className="container">
                    <div className="portfolio__body__btns">
                        <button className={`portfolio__body__btns__btn ${btnId ? '' : 'active'}`} onClick={() => setBtnId('')}>
                            {
                                currentLangCode === "uz" ? "Barcha loyihalar" :
                                    currentLangCode === "ru" ? "Все проекты" :
                                        currentLangCode === "en" ? "All projects" : ""
                            }
                        </button>
                        {
                            projectMenu ? projectMenu.map(item => {
                                const strtitle = JSON.parse(item?.title)
                                return (
                                    <button onClick={() => setBtnId(item.id)} key={item.id} className={`portfolio__body__btns__btn ${btnId === item.id ? 'active' : ''}`}>
                                        {strtitle[currentLangCode]}
                                    </button>
                                )
                            }) : <h1>Loading...</h1>
                        }
                    </div>
                    <div className="portfolio__body__box">
                        <div className="projects__box">
                            {
                                data ? data.filter(item => item.serviceId.includes(btnId)).map(item => {
                                    const strTitle = JSON.parse(item.title)
                                    return (
                                        <div key={item.id} className="projects__box__card" data-aos="flip-right" >
                                            <div className="projects__box__card__img">
                                                <LazyLoadImage
                                                    src={`http://192.168.1.195:5055/projects/${item?.image}`}
                                                    alt=""
                                                    effect="blur"
                                                    placeholderSrc={`http://192.168.1.195:5055/projects/${item?.image}`}
                                                />
                                            </div>
                                            <div className="projects__box__card__content">
                                                <h3 className='projects__box__card__content__title'>
                                                    {strTitle[currentLangCode]}
                                                </h3>
                                                <button className="projects__box__card__content__btn" onClick={() => navigate(`/project-info/${item?.id}`)}>
                                                    <span className='projects__box__card__content__btn__title'>
                                                        Batafsil...
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                                    : <h1>Loading...</h1>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index