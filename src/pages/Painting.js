import React from "react";
import { Col, Row } from 'antd';
// import Slider from 'react-animated-slider';
// import 'react-animated-slider/build/horizontal.css';
import painting1 from "./../images/painting1.JPG";
import painting2 from "./../images/painting2.JPG";
import painting3 from "./../images/painting3.JPG";
import painting4 from "./../images/painting4.JPG";
import "./../App.css";

const slides = [
    { title: painting1, text: "'Reminisce' 16x20 - Oil on Stretched Canvas"},
    { title: painting2, text: "'Gaze' 22x18 - Oil on Wood" },
    { title: painting3, text: "'Frustration' 24x18 - Oil on Stretched Canvas" },
    { title: painting4, text: "'After School' 14x11 - Oil on Stretched Canvas" }
  ];

  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];


function Painting() {
    return (
        <div>
            <Row justify="center" align="middle">
                <Col span={6}>
                    <h1 className="Header">
                        Painting
                    </h1>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12} >
                    {/* <Slider autoplay={3000} style={{height: "auto"}}>
                        {slides.map((slide, index) => <div key={index}>
                            <div className="container">
                                <img src={slide.title} alt="loading..." className="images"/>
                                <div className="overlay">
                                    <div className="text">{slide.text}</div>
                                </div>
                            </div>
                        </div>)}
                    </Slider> */}
                    <div className="container">
                        <img src={painting1} alt="loading..." className="images"/>
                        <div className="overlay">
                            <div className="text">'Reminisce' 16x20 - Oil on Stretched Canvas</div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12}>
                  <div className="container">
                     <img src={painting2} alt="loading..." className="images"/>
                     <div className="overlay">
                        <div className="text">'Gaze' 22x18 - Oil on Wood</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12}>
                  <div className="container">
                     <img src={painting3} alt="loading..." className="images"/>
                     <div className="overlay">
                        <div className="text">'Frustration' 24x18 - Oil on Stretched Canvas</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12}>
                  <div className="container">
                     <img src={painting4} alt="loading..." className="images"/>
                     <div className="overlay">
                        <div className="text">'After School' 14x11 - Oil on Stretched Canvas</div>
                     </div>
                  </div>
                </Col>
            </Row>
        </div>
    );
}

export default Painting;
