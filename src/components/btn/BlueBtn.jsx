import React from "react";
import "./blueBtn.css";

const BlueBtn = ({btnName, clickEvent}) => {
  return (
    <>
      <button
        onClick={clickEvent}
        className="learnMoreButton"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {btnName} &gt;
      </button>
    </>
  );
};

export default BlueBtn;
