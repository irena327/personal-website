import React from "react";
import { Col, Row } from 'antd';
import Resume from "./../Resume.pdf";
import headshot from "./../images/headshot.jpg"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { IoNewspaperOutline } from 'react-icons/io5';
import "../App.css"

function Home() {
    return (
        <div>
            <Row justify="center" align="middle">
                <Col span={8}>
                    <Row justify="center" align="middle">
                        <h1 className="Header">
                            About Me
                        </h1>
                    </Row>
                    <Row justify="center" align="middle" className="Body">
                        <div className="IntroBody">
                            Hi, welcome to my personal website! I recently graduated from <a href="https://www.utexas.edu/" target="_blank" rel="noreferrer"><strong>The University of Texas at Austin</strong></a> with degrees in Computer Science and Economics and a minor in Applied Statistics. Currently, I am a software engineer at <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><strong>Pinterest</strong></a>. 
                        </div>
                        <div className="IntroBody">
                           Outside of school, I enjoy baking (and sometimes selling) layer cakes. I also love travelling, trying new foods, crocheting, painting, and playing pickleball recreationally.
                        </div>
                    </Row>
                    <Row justify="center" align="middle">
                        <a href="mailto:irenalee@utexas.edu"><HiOutlineMail className="icon"/></a>
                        <a href={Resume} target="_blank" rel="noreferrer"><IoNewspaperOutline className="icon"/></a>
                        <a href="https://github.com/irena327" target="_blank" rel="noreferrer"><FaGithub className="icon"/></a>
                        <a href="https://www.linkedin.com/in/irena-lee/" target="_blank" rel="noreferrer"><FaLinkedin className="icon"/></a>
                    </Row>
                </Col>
                <Col span={8} offset={1}>
                    <img src={headshot} alt="Headshot" className="image" style={{borderRadius: "50px"}}/>
                </Col>
            </Row>
        </div>
    );
}

export default Home;
