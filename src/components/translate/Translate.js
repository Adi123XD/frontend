import React, { useRef, useEffect, useState } from "react";
import "./Translate.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom } from "@fortawesome/free-solid-svg-icons";
import Webcam from "webcam-easy";

const Translate = () => {
  const webcamRef = useRef(null);
  const videoPopupRef = useRef(null);
  const [webcamInstance, setWebcamInstance] = useState(null);
  let videoPopupVisible = false;
  useEffect(() => {
    const newWebcam = new Webcam(webcamRef.current, "user");
    setWebcamInstance(newWebcam);
  }, []);
  const [predictionText, setPredictionText] = useState(
    "This is my prediction Output area"
  );
  const toggleVideoPopup = () => {
    if (showWebcam && webcamInstance) {
      webcamInstance.stop();
      videoPopupRef.current.style.display = "none";
      videoPopupVisible = false;
    } else if (!videoPopupVisible && webcamInstance) {
      webcamInstance.start();
      videoPopupRef.current.style.display = "block";
      videoPopupVisible = true;
    }
  };
  const clearPrediction = () => {
    setPredictionText("");
  };
  const [showWebcam, setShowWebcam] = useState(false);
  const [buttonText, setButtonText] = useState("Start");

  const handleStartBtn = () => {
    setShowWebcam((prevShowWebcam) => !prevShowWebcam);
    toggleVideoPopup();
    setButtonText((prevButtonText) =>
      prevButtonText === "Start" ? "Stop" : "Start"
    );
  };
  return (
    <div className="translate">
      <div className="modelWrapper">
        <div className="leftWebcam">
          <img
            className="frameImage"
            src="profile.webp"
            alt="webcam_pic"
            style={{ display: showWebcam ? "none" : "block" }}
          />
          <motion.button className="webcamButton" onClick={handleStartBtn}>
            {buttonText}
          </motion.button>
          <div id="videoPopup" ref={videoPopupRef}>
            <video id="webcam" ref={webcamRef} autoPlay playsInline></video>
          </div>
        </div>
        <div className="rightPredict">
          <div className="predictionArea">
            <FontAwesomeIcon
              icon={faBroom}
              className="clearIcon"
              onClick={clearPrediction}
            />
            <p className="predictionOutput">{predictionText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translate;
