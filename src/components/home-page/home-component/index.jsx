import React, { useEffect, useState } from 'react';
import IconBack from 'assets/images/png/home-img.png'

const index = () => {

    const [rotation, setRotation] = useState({
        hour: 0,
        minute: 0,
        second: 0
    });

    const deg = 6;

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const hours = date.getHours() * 30;
            const minutes = date.getMinutes() * deg;
            const seconds = date.getSeconds() * deg;

            setRotation({
                hour: hours + (minutes / 12),
                minute: minutes,
                second: seconds
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='home-component'>
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
                <div className="home-component-box">
                    <p className="home-component-box-title">
                        Zamonaviy texnalogiyalar <br />
                        Agentligi
                    </p>
                    <div className="home-component-box-info">
                        <button onClick={() => alert("Batafsil ma'lumot")} className='home-component-box-info-btn'>
                            <span>Batafsil ma'lumot</span>
                        </button>
                        <div className="box">
                            <div className="clock">
                                <div className="hour">
                                    <div className="hr" id="hr" style={{ transform: `rotateZ(${rotation.hour}deg)` }}></div>
                                </div>
                                <div className="min">
                                    <div className="mn" id='mn' style={{ transform: `rotateZ(${rotation.minute}deg)` }}></div>
                                </div>
                                <div className="sec">
                                    <div className="sc" id='sc' style={{ transform: `rotateZ(${rotation.second}deg)` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index


