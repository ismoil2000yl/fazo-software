import React from 'react'
import { useNavigate } from 'react-router-dom'

const index = () => {

    const navigate = useNavigate()

    return (
        <div className="found">
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
            <div className="found-box">
                <h1 className='found-box-title'>404</h1>
                <p className='found-box-description'>Page not found</p>
                <button onClick={() => navigate(-1)} className='found-box-btn'>Back to page</button>
            </div>
        </div>
    )
}

export default index