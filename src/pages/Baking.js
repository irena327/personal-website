import React from "react";
import { Col, Row } from 'antd';
import daisy from "./../images/daisy.png";
import ChocolateStrawberry from "./../images/cakes/1.jpg";
import ChocolateStrawberry2 from "./../images/cakes/2.jpg";
import StrawberryMango from "./../images/cakes/3.jpg";
import StrawberryMango2 from "./../images/cakes/4.jpg";
import ChocolateBlackberry from "./../images/cakes/5.jpg";
import ChocolateBlackberry2 from "./../images/cakes/6.jpg";
import Tiramisu from "./../images/cakes/7.jpg";
import Tiramisu2 from "./../images/cakes/8.jpg";
import Berry from "./../images/cakes/9.jpg";
import Berry2 from "./../images/cakes/10.jpg";
import Banana from "./../images/cakes/11.jpg";
import Banana2 from "./../images/cakes/12.jpg";
import Strawberry from "./../images/cakes/13.jpg";
import Strawberry2 from "./../images/cakes/14.jpg";
import Biscoff from "./../images/cakes/15.jpg";
import Biscoff2 from "./../images/cakes/16.jpg";
import Ombre from "./../images/cakes/17.jpg";
import Ombre2 from "./../images/cakes/18.jpg";
import Mocha from "./../images/cakes/19.jpg";
import Mocha2 from "./../images/cakes/20.jpg";
import Matcha from "./../images/cakes/21.jpg";
import Matcha2 from "./../images/cakes/22.jpg";
import "./../App.css";

function Baking() {
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
                        The BakerLee
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
                <Col span={10} >
                  <div class="container">
                     <img src={ChocolateStrawberry} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">Dark Chocolate Strawberry Cake</div>
                     </div>
                  </div>
                </Col>
                <Col span={10} >
                  <div class="container">
                     <img src={ChocolateStrawberry2} alt="loading..." className="images"/>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={10} >
                  <div class="container">
                     <img src={StrawberryMango} alt="loading..." className="images"/>
                  </div>
                </Col>
                <Col span={10} >
                  <div class="container">
                     <img src={StrawberryMango2} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">Strawberry Mango Sunset Cake</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={10} >
                  <div class="container">
                     <img src={ChocolateBlackberry} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">Chocolate Blackberry Cake</div>
                     </div>
                  </div>
                </Col>
                <Col span={10} >
                  <div class="container">
                     <img src={ChocolateBlackberry2} alt="loading..." className="images"/>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={10} >
                  <div class="container">
                     <img src={Tiramisu} alt="loading..." className="images"/>
                  </div>
                </Col>
                <Col span={10} >
                  <div class="container">
                     <img src={Tiramisu2} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">Tiramisu Cake</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={10} >
                  <div class="container">
                     <img src={Berry} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">Berry Chantilly Cake</div>
                     </div>
                  </div>
                </Col>
                <Col span={10} >
                  <div class="container">
                     <img src={Berry2} alt="loading..." className="images"/>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={10} >
                  <div class="container">
                     <img src={Banana} alt="loading..." className="images"/>
                  </div>
                </Col>
                <Col span={10} >
                  <div class="container">
                     <img src={Banana2} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">Banana Pudding Cake</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={10} >
                  <div class="container">
                     <img src={Strawberry} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">Strawberry Biscoff Cake</div>
                     </div>
                  </div>
                </Col>
                <Col span={10} >
                  <div class="container">
                     <img src={Strawberry2} alt="loading..." className="images"/>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={10} >
                  <div class="container">
                     <img src={Biscoff} alt="loading..." className="images"/>
                  </div>
                </Col>
                <Col span={10} >
                  <div class="container">
                     <img src={Biscoff2} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">Cookie Butter Cake</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={10} >
                  <div class="container">
                     <img src={Ombre} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">Peach Ombre Cake</div>
                     </div>
                  </div>
                </Col>
                <Col span={10} >
                  <div class="container">
                     <img src={Ombre2} alt="loading..." className="images"/>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={10} >
                  <div class="container">
                     <img src={Mocha} alt="loading..." className="images"/>
                  </div>
                </Col>
                <Col span={10} >
                  <div class="container">
                     <img src={Mocha2} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">Mocha Espresso Cake</div>
                     </div>
                  </div>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="row">
                <Col span={10} >
                  <div class="container">
                     <img src={Matcha} alt="loading..." className="images"/>
                     <div class="overlay">
                        <div class="text">Matcha Chiffon Cake</div>
                     </div>
                  </div>
                </Col>
                <Col span={10} >
                  <div class="container">
                     <img src={Matcha2} alt="loading..." className="images"/>
                  </div>
                </Col>
            </Row>
        </div>
    );
}

export default Baking;
