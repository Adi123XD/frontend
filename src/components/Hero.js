import React, { useRef, useEffect,useState  } from "react";
import "./Hero.css";
import { motion } from 'framer-motion';
import Webcam from "webcam-easy";

const Hero = () => {
  const webcamRef = useRef(null);
  const videoPopupRef = useRef(null);
  const [webcamInstance, setWebcamInstance] = useState(null);
  let videoPopupVisible = false;

  useEffect(() => {
    const newWebcam = new Webcam(webcamRef.current, "user");
    setWebcamInstance(newWebcam);
  }, []);
  const toggleVideoPopup = () => {
    if (!videoPopupVisible && webcamInstance) {
      webcamInstance.start();
      videoPopupRef.current.style.display = "block";
      videoPopupVisible = true;
    } else if (webcamInstance) {
      webcamInstance.stop();
      videoPopupRef.current.style.display = "none";
      videoPopupVisible = false;
    }
  };
  return (
    <div className="hero">
      <div className="left-container">
        <div className="leftContent">
          <h1 className="headerText">Sign To Text Model</h1>
          <p className="textContainer">
            A machine Learning model that helps people translate sign language
            to text{" "}
          </p>
          <motion.button onClick={toggleVideoPopup} whileTap={{scale:0.9}} whileHover={{cursor:"pointer",backgroundColor:"#CC5B14"}}>Webcam</motion.button>
        </div>
      </div>
      <div className="right-container">
        <img className="heroBanner" src="Frame 1.jpg" alt="" />
      </div>
      <div id="videoPopup" ref={videoPopupRef}>
        <video id="webcam" ref={webcamRef} autoPlay playsInline></video>
      </div>
    </div>
  );
};

export default Hero;
