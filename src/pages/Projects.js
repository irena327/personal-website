import React from "react";
import { Col, Row } from 'antd';
import SignIn from "./../images/budget/signin.gif";
import ItemInput from "./../images/budget/iteminput.gif";
import { Button } from "antd";
import About from "./../images/About.png";
import BakingPage from "./../images/BakingPage.png";
import "./../App.css";

function Projects() {
    return (
      <div>
            <Row justify="center" align="middle">
                <Col span={6}>
                    <h1 className="Header">
                        Projects
                    </h1>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="Pink">
                <Col>
                    <Row justify="center" align="middle">
                        <Col span={24}>
                            <h2>
                                Budget Tracker
                            </h2>
                            <p style={{ fontSize: "18px" }}>
                                A web app built in React, CSS, and Firebase for tracking expenses and setting budgets based on categories.
                            </p>
                        </Col>
                    </Row>
                    <Row justify="center" align="middle">
                        <img src={SignIn} style={{maxWidth: "80%", borderRadius: "10px", marginRight: "40px"}}/>
                        <img src={ItemInput} style={{maxWidth: "80%", borderRadius: "10px"}}/>
                    </Row>
                    <Row justify="center" align="middle">
                        <Button type="primary"
                            size="medium"
                            className="Home" 
                            style={{ padding: 5, marginTop: "25px" }}
                            href="https://github.com/irena327/budgeting-app" target="_blank" rel="noreferrer">
                                View full repository on GitHub
                        </Button>
                    </Row>
                </Col>
            </Row>
            <Row justify="center" align="middle" className="Pink" style={{ marginTop: "3%" }}>
                <Col>
                    <Row justify="center" align="middle">
                        <Col span={24}>
                            <h2>
                                Personal Website (a.k.a this)
                            </h2>
                            <p style={{ fontSize: "18px" }}>
                                A web app built in React and CSS with information about my projects, my interests, and me.
                            </p>
                        </Col>
                    </Row>
                    <Row justify="center" align="middle">
                        <Col span={24}>
                            <img src={About} style={{maxWidth: "80%", width: "40vw", borderRadius: "10px", marginRight: "40px"}}/>
                            <img src={BakingPage} style={{maxWidth: "80%", width: "40vw", borderRadius: "10px"}}/>
                        </Col>
                    </Row>
                    <Row justify="center" align="middle">
                        <Button type="primary"
                            size="medium"
                            className="Home" 
                            style={{ padding: 5 }}
                            href="https://github.com/irena327/personal-website" target="_blank" rel="noreferrer">
                                View full repository on GitHub
                        </Button>
                    </Row>
                </Col>
            </Row>
      </div>
    );
}

export default Projects;
