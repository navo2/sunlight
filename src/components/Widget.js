import React, { useState } from "react";
import "./Widget.css"; 
import leftButtonImage from "../assets/new pack.png";
import rightButtonImage from "../assets/Rose.png";
import scratch from '../assets/Dirty_shirt.jpg';
import ScratchCard from 'react-scratchcard';
import next from "../assets/Clean_shirt.jpg";
import fragranceGif from "../assets/Fregance_Gif.gif";


function Widget() {
  const settings = {
   
    image: scratch,
    finishPercent: 70,
    onComplete: () => {
      console.log('The card is now clear!');
      setScratchingComplete(true);
      setShowRightButton(true)
    }
  };

  const [showDirtySection, setShowDirtySection] = useState(false);
  const [showFragranceGif, setShowFragranceGif] = useState(false);
  const [scratchingComplete, setScratchingComplete] = useState(false);
  const [showLeftButton, setShowLeftButton] = useState(true);
  const [showRightButton, setShowRightButton] = useState(false);

  const handleLeftButtonClick = () => {
    if (showLeftButton) {
      setShowDirtySection(true);
      setShowFragranceGif(false);
      setScratchingComplete(false);
      setShowLeftButton(false);
    
    }
  };

  const handleRightButtonClick = () => {
    if (scratchingComplete) {
      setShowFragranceGif(true);
      setShowDirtySection(false);
      setShowLeftButton(false);
      setShowRightButton(false);
    }
  };

  return (
    <>
      <div className="widget-container">
        {showLeftButton && (
          <button
            className={`left-button ${!showRightButton ? "" : "disabled"}`}
            onClick={handleLeftButtonClick}
          >
            <img src={leftButtonImage} alt="Left Button" className="left-img" />
          </button>
        )}
        {showRightButton && (
          <button
            className={`right-button ${showRightButton ? "enabled" : "disabled"}`}
            onClick={handleRightButtonClick}
          >
            <img src={rightButtonImage} alt="Right Button" className="left-img" />
          </button>
        )}
      </div>

      <div className="size">
        {showDirtySection && (
          <div className="dirty">
            {!showRightButton && (

              <ScratchCard {...settings}>

                <img src={next} alt="Your Image" />

              </ScratchCard>
            )}

          </div>
        )}

        {showFragranceGif && (
          <div className="fragrance-gif">
            <img src={fragranceGif} alt="Fragrance Gif" />
          </div>
        )}

      </div>
    </>
  );
}

export default Widget;
