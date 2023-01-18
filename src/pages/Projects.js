import React from "react";
import { Col, Row } from 'antd';
import daisy from "./../images/daisy.png";
import "./../App.css";

function Projects() {
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
                        Projects
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
      </div>
    );
}

export default Projects;
