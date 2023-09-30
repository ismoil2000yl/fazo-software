import React from 'react'
import { useParams } from 'react-router-dom'

const index = () => {

    const { name } = useParams()

    return (
        <div className='service'>
            <div className="service__header">
                <ul className="circles">
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
                    <div className="service__header__title">
                        <h1>{name}</h1>
                    </div>
                </div>
            </div>
            <div className="service__body">
                <div className="container">
                    <div className="service__body__description">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Modi repellendus, autem alias animi veritatis nisi eum
                            facere quas enim ipsum minima debitis iure inventore ex
                            accusantium tenetur! Itaque, distinctio eius.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Modi repellendus, autem alias animi veritatis nisi eum
                            facere quas enim ipsum minima debitis iure inventore ex
                            accusantium tenetur! Itaque, distinctio eius.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Modi repellendus, autem alias animi veritatis nisi eum
                            facere quas enim ipsum minima debitis iure inventore ex
                            accusantium tenetur! Itaque, distinctio eius.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Modi repellendus, autem alias animi veritatis nisi eum
                            facere quas enim ipsum minima debitis iure inventore ex
                            accusantium tenetur! Itaque, distinctio eius.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Modi repellendus, autem alias animi veritatis nisi eum
                            facere quas enim ipsum minima debitis iure inventore ex
                            accusantium tenetur! Itaque, distinctio eius.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Modi repellendus, autem alias animi veritatis nisi eum
                            facere quas enim ipsum minima debitis iure inventore ex
                            accusantium tenetur! Itaque, distinctio eius.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Modi repellendus, autem alias animi veritatis nisi eum
                            facere quas enim ipsum minima debitis iure inventore ex
                            accusantium tenetur! Itaque, distinctio eius.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Modi repellendus, autem alias animi veritatis nisi eum
                            facere quas enim ipsum minima debitis iure inventore ex
                            accusantium tenetur! Itaque, distinctio eius.

                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Modi repellendus, autem alias animi veritatis nisi eum
                            facere quas enim ipsum minima debitis iure inventore ex
                            accusantium tenetur! Itaque, distinctio eius.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Modi repellendus, autem alias animi veritatis nisi eum
                            facere quas enim ipsum minima debitis iure inventore ex
                            accusantium tenetur! Itaque, distinctio eius.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index