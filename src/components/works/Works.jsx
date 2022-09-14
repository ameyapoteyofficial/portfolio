import { useState } from "react";
import "./works.scss";
import LanguageIcon from '@material-ui/icons/Language';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "RNN for Machine Translation",
      desc:
        "Built a RNN based model for machine translation, capable of translating English sentences to French",
      img:
        "assets/RNN.jpeg",
        code:"https://github.com/ameyapoteyofficial/RNN-for-Machine-Translation",
    },
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Bed & Breakfast Web Application ",
      desc:
        "Devevloped a Web-based full-fledged Bed & Breakfast application using MERN stack",
      img:
        "assets/bed-and-breakfast.png",
      code:"https://github.com/ameyapoteyofficial/Bed-and-Breakfast",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "DavisBase",
      desc:
        "Built a rudimentary database engine modelled on the MySQL framework from scratch using Java.",
      img:
        "assets/davisbase.png",
        code:"https://github.com/ameyapoteyofficial/DavisBase-DBEngine",
    },
    
    
    
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      
        <h1>Key projects</h1>
      
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
       >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                  <LanguageIcon className="arrow"/>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.code} target="_blank" rel="noreferrer">Source Code &#8594;</a>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}