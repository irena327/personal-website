import React from "react";
import { Col, Row } from 'antd';
import daisy from "./../images/daisy.png";
import design1 from "./../images/design1.JPG";
import design2 from "./../images/design2.JPG";
import design3 from "./../images/design3.JPG";
import design4 from "./../images/design4.JPG";
import design5 from "./../images/design5.JPG";
import design6 from "./../images/design6.JPG";
import "./../App.css";

function Design() {
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
                        Design
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
                     <img src={design1} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">'Udder-ly A-moo-sing!' 18x24 - Graphic Design</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12}>
                  <div class="container">
                     <img src={design2} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">'Records' 20x20 - Graphic Design</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12}>
                  <div class="container">
                     <img src={design3} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">'Still Life 2' 14x11 - Graphic Design</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12}>
                  <div class="container">
                     <img src={design4} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">'The Yellow Bicycle' 16x12 - Graphic Design</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12}>
                  <div class="container">
                     <img src={design5} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">'CDs' 16x16 - Graphic Design</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12}>
                  <div class="container">
                     <img src={design6} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">'RUFF Magazine' 12x8 - Graphic Design</div>
                     </div>
                  </div>
                </Col>
            </Row>
        </div>
    );
}

export default Design;
