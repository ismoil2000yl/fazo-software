import React, { useState } from "react";
import IconTelegram from 'assets/images/jpg/Artboard 1-100.jpg'
import IconInstagram from 'assets/images/jpg/Artboard 4-100.jpg'
import IconFacebook from 'assets/images/jpg/Artboard 6-100.jpg'
import IconDiamond from 'assets/images/jpg/Artboard 3-100.jpg'

const index = () => {
  return (
    <footer className="footer">
      <ul className="social-network">
        <li className="social-network-item">
          <img src={IconTelegram} alt="" />
          <h4 className="social-network-item-title">Telegram</h4>
        </li>
        <li className="social-network-item">
          <img src={IconInstagram} alt="" />
          <h4 className="social-network-item-title">Instagram</h4>
        </li>
        <li className="social-network-item">
          <img src={IconFacebook} alt="" />
          <h4 className="social-network-item-title">Facebook</h4>
        </li>
        <li className="social-network-item">
          <img src={IconDiamond} alt="" />
          <h4 className="social-network-item-title">Diamond</h4>
        </li>
      </ul>
    </footer>
  );
};

export default index;