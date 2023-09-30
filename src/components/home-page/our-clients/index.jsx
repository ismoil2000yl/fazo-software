import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import IconClient1 from 'assets/images/jpg/client-1.jpg'
import IconClient2 from 'assets/images/jpg/client-2.jpg'
import IconClient3 from 'assets/images/jpg/client-3.jpg'
import IconClient4 from 'assets/images/jpg/client-4.jpg'
import IconClient5 from 'assets/images/jpg/client-5.jpg'
import IconClient6 from 'assets/images/jpg/client-6.jpg'
import IconClient7 from 'assets/images/jpg/client-7.jpg'
import IconClient8 from 'assets/images/jpg/client-8.jpg'
import { Autoplay } from 'swiper';

const index = () => {



    return (
        <div className='clients-div'>
            <div className="clients">
                <div className="clients__title" data-aos="fade-up">
                    <h1>Bizning mijozlarimiz</h1>
                </div>
                <div className="clients__box">
                    <Swiper
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
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient1} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient2} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient3} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient4} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient5} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient6} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient7} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient8} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient1} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient2} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient3} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient4} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient5} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient6} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient7} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient8} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="clients__box">
                    <Swiper
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
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient1} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient2} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient3} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient4} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient5} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient6} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient7} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient8} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient1} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient2} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient3} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient4} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient5} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient6} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient7} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="clients__box__item">
                                <img src={IconClient8} alt="" className="clients__box__item__img" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default index