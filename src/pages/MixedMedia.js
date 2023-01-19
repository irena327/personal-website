import React from "react";
import { Col, Row } from 'antd';
import mixedmedia1 from "./../images/mixedmedia1.JPG";
import mixedmedia2 from "./../images/mixedmedia2.JPG";
import mixedmedia3 from "./../images/mixedmedia3.JPG";
import "./../App.css";

function MixedMedia() {
    return (
        <div>
            <Row justify="center" align="middle">
                <Col span={6}>
                    <h1 className="Header">
                        Mixed Media
                    </h1>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12} >
                  <div class="container">
                     <img src={mixedmedia1} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">'Fallen Grasp' 14x20 - Acrylic and Colored Pencil</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12}>
                  <div class="container">
                     <img src={mixedmedia2} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">'Cutie' 7x20 - Ink, Watercolor, Orange Juice</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={12}>
                  <div class="container">
                     <img src={mixedmedia3} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">'Splash!' 11x14 - Pen, Watercolor, Colored Pencil</div>
                     </div>
                  </div>
                </Col>
            </Row>
        </div>
    );
}

export default MixedMedia;
