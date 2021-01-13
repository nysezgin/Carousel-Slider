import "./App.css";
import React, { useState } from "react";
import Student from "./Student";
import previousIcon from "./images/icon-prev.svg";
import nextIcon from "./images/icon-next.svg";
import studentListData from "./studentListData";

function App() {
  const [studentArrNo, setStudentArrNo] = useState(0);
  /*
Carousel Button Handlers
*/
  const handlePrevious = () => {
    if (studentArrNo > 0) {
      setStudentArrNo(studentArrNo - 1);
    } else {
      setStudentArrNo(studentListData.length - 1);
    }
  };

  const handleNext = () => {
    if (studentArrNo < studentListData.length - 1) {
      setStudentArrNo(studentArrNo + 1);
    } else {
      setStudentArrNo(0);
    }
  };

  return (
    <div className={"carousel"}>
      {/* 
      Student Shown On The Page
      */}

      {studentListData.map((student, index)=> {
        return (
          <div
            key={student.id}
            className={index === studentArrNo ? "slide slide--active" : "slide"}
          >
            {index === studentArrNo && <Student {...student} />}
          </div>
        );
      })}

      {/* 
      Carousel Buttons
      */}
      <div className="carousel-button">
        <button
          onClick={handlePrevious}
          className="carousel-button__previous"
          type="button"
        >
          <img
            className="carousel-button__previous-image"
            src={previousIcon}
            alt=""
          />
        </button>
        <button
          onClick={handleNext}
          className="carousel-button__next"
          type="button"
        >
          <img className="carousel-button__next-image" src={nextIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
