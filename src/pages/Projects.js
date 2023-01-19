import React from "react";
import { Col, Row } from 'antd';
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
      </div>
    );
}

export default Projects;
