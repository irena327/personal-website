import React from "react";
import { Col, Row } from 'antd';
import daisy from "./../images/daisy.png";
import drawing1 from "./../images/drawing1.JPG";
import drawing2 from "./../images/drawing2.JPG";
import drawing3 from "./../images/drawing3.JPG";
import drawing4 from "./../images/drawing4.JPG";
import drawing5 from "./../images/drawing5.JPG";
import "./../App.css";

function Drawing() {
    return (
        <div>
            <Row justify="center" align="middle">
                <Col span={2}>
                    <img
                        src={daisy}
                        alt="logo"
                        width="40"
                        height="40"
                    />
                </Col>
                <Col span={6}>
                    <h1 className="Header">
                        Drawing
                    </h1>
                </Col>
                <Col span={2}>
                    <img
                        src={daisy}
                        alt="logo"
                        width="40"
                        height="40"
                    />
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12} >
                  <div class="container">
                     <img src={drawing1} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">'Rocky' 16x12 - Colored Pencil</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12}>
                  <div class="container">
                     <img src={drawing2} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">'Momma's Homemade Sauce' 14x11 - Colored Pencil</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12}>
                  <div class="container">
                     <img src={drawing3} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">'Still Life' 14x11 - Graphite</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12}>
                  <div class="container">
                     <img src={drawing4} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">'Flower Boy' 16x12 - Colored Pencil</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12}>
                  <div class="container">
                     <img src={drawing5} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">'Reflection' 8x10 - Colored Pencil</div>
                     </div>
                  </div>
                </Col>
            </Row>
        </div>
    );
}

export default Drawing;
