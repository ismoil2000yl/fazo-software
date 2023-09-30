import React from 'react'
import ImgProject from 'assets/images/jpg/my-project-5.jpg'

const index = () => {
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
                        <h1>Fazo Software APK dasturi</h1>
                    </div>
                </div>
            </div>
            <div className="projects-info__body">
                <div className="container">
                    <div className="projects-info__body__box">
                        <div className="projects-info__body__box__img">
                            <img src={ImgProject} className='projects-info__body__box__img__item' alt="" />
                        </div>
                        <div className="projects-info__body__box__link">
                            <h3>👇Dastur linki:👇</h3>
                            <a href="">http://Fazo-Software.uz</a>
                        </div>
                        <div className="projects-info__body__box__description">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Earum modi rem perspiciatis harum excepturi, error amet
                                doloremque suscipit, nobis recusandae ad nemo praesentium
                                porro similique voluptatem placeat atque, cupiditate ducimus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index