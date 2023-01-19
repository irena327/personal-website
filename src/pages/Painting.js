import React from "react";
import { Col, Row } from 'antd';
import painting1 from "./../images/painting1.JPG";
import painting2 from "./../images/painting2.JPG";
import painting3 from "./../images/painting3.JPG";
import painting4 from "./../images/painting4.JPG";
import "./../App.css";

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
                  <div class="container">
                     <img src={painting1} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">'Reminisce' 16x20 - Oil on Stretched Canvas</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12}>
                  <div class="container">
                     <img src={painting2} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">'Gaze' 22x18 - Oil on Wood</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12}>
                  <div class="container">
                     <img src={painting3} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">'Frustration' 24x18 - Oil on Stretched Canvas</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12}>
                  <div class="container">
                     <img src={painting4} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">'After School' 14x11 - Oil on Stretched Canvas</div>
                     </div>
                  </div>
                </Col>
            </Row>
        </div>
    );
}

export default Painting;
