import React from "react";
import {FaEnvelope, FaLinkedinIn, FaGithub, FaTelegramPlane} from "react-icons/fa";

const Social = () => {
  return (
    <div>
        <div className="flex space-x-6 p-2">
            <a href="mailto:hi@edcartwright.com" target="_blank" rel="noreferrer"><FaEnvelope size={25} color="#BF6330"/></a>
            <a href="https://www.linkedin.com/in/edcrossfire" target="_blank" rel="noreferrer"><FaLinkedinIn size={25} color="#BF6330"/></a>
            <a href="https://github.com/edcrossfire" target="_blank" rel="noreferrer"><FaGithub size={25} color="#BF6330"/></a>
            <FaTelegramPlane size={25} color="#BF6330"/>
        </div>
    </div>
  )
}

export default Social