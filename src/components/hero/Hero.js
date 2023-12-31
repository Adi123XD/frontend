import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import { motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();
  const handleButtonClick=()=>{
    navigate("/translate");
  }

   return (
    <div className="hero">
      <div className="left-container">
        <div className="leftContent">
          <h1 className="headerText">Sign To Text Model</h1>
          <p className="textContainer">
            A machine Learning model that helps people translate sign language
            to text{" "}
          </p>
          <motion.button  className="primaryButton" whileTap={{scale:0.9}} whileHover={{cursor:"pointer",backgroundColor:"#CC5B14"}} onClick={handleButtonClick}>Translate</motion.button>
        </div>
      </div>
      <div className="right-container">
        <img className="heroBanner" src="Frame 1.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
