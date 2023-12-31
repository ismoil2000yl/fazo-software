import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { api } from 'services';

const index = () => {

    const [data, setData] = useState([])
    const { currentLangCode } = useSelector(state => state.system)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await axios.get("http://192.168.1.195:5055/partners/all")
        setData(data?.data)
    }

    return (
        <div className='clients-div'>
            <div className="clients">
                <div className="clients__title" data-aos="fade-up">
                    <h1>
                        {
                            currentLangCode === "uz" ? "Bizning mijozlarimiz" :
                                currentLangCode === "ru" ? "Наши клиенты" :
                                    currentLangCode === "en" ? "Our clients" : ""
                        }
                    </h1>
                </div>
                <div className="clients__box">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            575: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            766: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            991: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1199: {
                                slidesPerView: 5,
                                spaceBetween: 40,
                            }
                        }}
                    >
                        {
                            data ?
                                data.map((item, idx) => {
                                    return (
                                        <SwiperSlide key={idx}>
                                            <div className="clients__box__item">
                                                <LazyLoadImage
                                                    src={`http://192.168.1.195:5055/partners/${item?.image}`}
                                                    alt=""
                                                    className="clients__box__item__img"
                                                    effect="blur"
                                                    placeholderSrc={`http://192.168.1.195:5055/partners/${item?.image}`}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    )
                                }) : <h1>Loading...</h1>
                        }
                    </Swiper>
                </div>
                <div className="clients__box">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                            reverseDirection: true
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            575: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            766: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            991: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1199: {
                                slidesPerView: 5,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {
                            data ?
                                data.map((item, idx) => {
                                    return (
                                        <SwiperSlide key={idx}>
                                            <div className="clients__box__item">
                                                <LazyLoadImage
                                                    src={`http://192.168.1.195:5055/partners/${item?.image}`}
                                                    alt=""
                                                    className="clients__box__item__img"
                                                    effect="blur"
                                                    placeholderSrc={`http://192.168.1.195:5055/partners/${item?.image}`}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    )
                                }) : <h1>Loading...</h1>
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default index