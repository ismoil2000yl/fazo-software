import React from 'react'
import ImgProject1 from 'assets/images/jpg/my-project-1.jpg'
import ImgProject2 from 'assets/images/jpg/my-project-2.jpg'
import ImgProject3 from 'assets/images/jpg/my-project-3.jpg'
import ImgProject4 from 'assets/images/jpg/my-project-4.jpg'
import ImgProject5 from 'assets/images/jpg/my-project-5.jpg'
import ImgProject6 from 'assets/images/jpg/my-project-6.jpg'
import { useNavigate } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const index = () => {

    const navigate = useNavigate()

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
                        <div className="projects__box__card" data-aos="flip-right" >
                            <div className="projects__box__card__img">
                                <LazyLoadImage
                                    src={ImgProject1}
                                    alt=""
                                    effect="blur"
                                    placeholderSrc={ImgProject1}
                                />
                            </div>
                            <div className="projects__box__card__content">
                                <h3 className='projects__box__card__content__title'>Empire web site</h3>
                                <button className="projects__box__card__content__btn" onClick={() => navigate('/project-info/1')}>
                                    <span className='projects__box__card__content__btn__title'>Batafsil...</span>
                                </button>
                            </div>
                        </div>
                        <div className="projects__box__card" data-aos="flip-right" >
                            <div className="projects__box__card__img">
                                <LazyLoadImage
                                    src={ImgProject2}
                                    alt=""
                                    effect="blur"
                                    placeholderSrc={ImgProject2}
                                />
                            </div>
                            <div className="projects__box__card__content">
                                <h3 className='projects__box__card__content__title'>Aqlli robot</h3>
                                <button className="projects__box__card__content__btn" onClick={() => navigate('/project-info/2')}>
                                    <span className='projects__box__card__content__btn__title'>Batafsil...</span>
                                </button>
                            </div>
                        </div>
                        <div className="projects__box__card" data-aos="flip-right" >
                            <div className="projects__box__card__img">
                                <LazyLoadImage
                                    src={ImgProject3}
                                    alt=""
                                    effect="blur"
                                    placeholderSrc={ImgProject3}
                                />
                            </div>
                            <div className="projects__box__card__content">
                                <h3 className='projects__box__card__content__title'>Fazo saytining UX UI dizayni</h3>
                                <button className="projects__box__card__content__btn" onClick={() => navigate('/project-info/3')}>
                                    <span className='projects__box__card__content__btn__title'>Batafsil...</span>
                                </button>
                            </div>
                        </div>
                        <div className="projects__box__card" data-aos="flip-right" >
                            <div className="projects__box__card__img">
                                <LazyLoadImage
                                    src={ImgProject4}
                                    alt=""
                                    effect="blur"
                                    placeholderSrc={ImgProject4}
                                />
                            </div>
                            <div className="projects__box__card__content">
                                <h3 className='projects__box__card__content__title'>3D Model</h3>
                                <button className="projects__box__card__content__btn" onClick={() => navigate('/project-info/4')}>
                                    <span className='projects__box__card__content__btn__title'>Batafsil...</span>
                                </button>
                            </div>
                        </div>
                        <div className="projects__box__card" data-aos="flip-right">
                            <div className="projects__box__card__img">
                                <LazyLoadImage
                                    src={ImgProject5}
                                    alt=""
                                    effect="blur"
                                    placeholderSrc={ImgProject5}
                                />
                            </div>
                            <div className="projects__box__card__content">
                                <h3 className='projects__box__card__content__title'>Fazo APK Android dasturi</h3>
                                <button className="projects__box__card__content__btn" onClick={() => navigate('/project-info/5')}>
                                    <span className='projects__box__card__content__btn__title'>Batafsil...</span>
                                </button>
                            </div>
                        </div>
                        <div className="projects__box__card" data-aos="flip-right">
                            <div className="projects__box__card__img">
                                <LazyLoadImage
                                    src={ImgProject6}
                                    alt=""
                                    effect="blur"
                                    placeholderSrc={ImgProject6}
                                />
                            </div>
                            <div className="projects__box__card__content">
                                <h3 className='projects__box__card__content__title'>Suv ichuvchi robot</h3>
                                <button className="projects__box__card__content__btn" onClick={() => navigate('/project-info/6')}>
                                    <span className='projects__box__card__content__btn__title'>Batafsil...</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index