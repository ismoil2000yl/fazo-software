import React from 'react'
import ImgPhone from 'assets/images/png/about-phone.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const index = () => {
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
                                "Fazo Software" Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Ad sequi corrupti voluptatum voluptate cupiditate voluptas
                                consequatur itaque reiciendis! Repudiandae mollitia voluptatibus,
                                id velit explicabo voluptas temporibus laboriosam aliquid sit alias.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index