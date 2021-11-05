import React from "react";
// import { FaFacebookF} from 'react-icons/fa'
import { FaFacebookF, FaTwitter, FaCopyright } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Subscribe from "../subscribe/Subscribe";

const Footer = () => {
  return (
    <div className="footerContainer">
      <a target="_blank" href="https://www.facebook.com" className="footerLink">
        <FaFacebookF className="footerLogo" />
        <span className="footerText">Facebook</span>
      </a>

      <a target="_blank" href="https://www.twitter.com" className="footerLink">
        <FaFacebookF className="footerLogo" />
        <span className="footerText">Twitter</span>
      </a>

      <li className="footerLi">
        My Blog | <FaCopyright /> 2021 All Rights Reserved
      </li>
    </div>
  );
};

export default Footer;
