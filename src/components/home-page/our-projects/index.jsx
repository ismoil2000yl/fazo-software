import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const index = () => {

    const navigate = useNavigate()
    const [projectMenu, setProjectMenu] = useState([])
    const [data, setData] = useState([])

    const [btnId, setBtnId] = useState('')

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
        <div className='projects__div'>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="container">
                <div className="projects">
                    <div className="projects__title" data-aos="fade-up">
                        <h1>Bizning loyihalarimiz</h1>
                    </div>
                    <div className="projects__box">
                        {
                            data ? data.map(item => {
                                return (
                                    <div className="projects__box__card" data-aos="flip-right" >
                                        <div className="projects__box__card__img">
                                            <LazyLoadImage
                                                src={`http://192.168.1.195:5055/projects/${item?.image}`}
                                                alt=""
                                                effect="blur"
                                                placeholderSrc={`http://192.168.1.195:5055/projects/${item?.image}`}
                                            />
                                        </div>
                                        <div className="projects__box__card__content">
                                            <h3 className='projects__box__card__content__title'>{item?.title}</h3>
                                            <button className="projects__box__card__content__btn" onClick={() => navigate(`/project-info/${item?.id}`)}>
                                                <span className='projects__box__card__content__btn__title'>Batafsil...</span>
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
    )
}

export default index