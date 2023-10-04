import React from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useNavigate } from 'react-router-dom';
import { data } from 'autoprefixer';

const index = ({ modalIsOpen, setModalIsOpen }) => {

    const navigate = useNavigate()

    return (
        <Modal
            open={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            center
            classNames={'menu-modal'}
        >
            <div className="menu">
                <div className="menu-header">

                </div>
                <div className="menu-body">
                    <ul className="nav">
                        <li className="nav-item" onClick={() => { navigate('/portfolio'), setModalIsOpen(false) }}>
                            <a className="nav-link">Portfolio</a>
                        </li>
                        <li className="nav-item" onClick={() => { navigate('/about'), setModalIsOpen(false) }}>
                            <a href="" className="nav-link">Biz xaqimizda</a>
                        </li>
                        <li className="nav-item" onClick={() => { navigate('/contact'), setModalIsOpen(false) }}>
                            <a href="" className="nav-link">Bog'lanish</a>
                        </li>
                        <li className="nav-item" onClick={() => { navigate('/services'), setModalIsOpen(false) }}>
                            <a href="" className="nav-link">Xizmatlarimiz</a>
                        </li>
                        <li className="nav-item" onClick={() => { navigate('/job'), setModalIsOpen(false) }}>
                            <a href="" className="nav-link">Ish izlayapsizmi?</a>
                        </li>
                    </ul>
                </div>
            </div>
        </Modal>
    )
}

export default index