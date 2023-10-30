import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const index = () => {

    const { name } = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await axios.get(`http://192.168.1.195:5055/services/${name}`)
        setItem(data?.data)
    }

    return (
        <div className='service'>
            <div className="service__header">
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
                    <div className="service__header__title">
                        <h1>{item?.title}</h1>
                    </div>
                </div>
            </div>
            <div className="service__body">
                <div className="container">
                    <div className="service__body__description">
                        <p>
                            {item?.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index