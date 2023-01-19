import React, { Component } from 'react';
import { Menu } from 'antd';
import logo from './../../images/logo.png';
import './NavigationBar.css';

const SubMenu = Menu.SubMenu;

class NavigationBar extends Component {
  render() {
    return (
   <Menu mode="horizontal" className="style">
        <div className="Name">
            Irena Lee
        </div>
        <Menu.Item key="home">
          <a style={{ textDecoration: "none" }} href="/home">About</a>
        </Menu.Item>
        <Menu.Item key="projects">
          <a style={{ textDecoration: "none" }} href="/projects">Projects</a>
        </Menu.Item>
        <SubMenu title={<span>Portfolio</span>}>
            <Menu.Item key="Painting">
               <a style={{ textDecoration: "none" }} href="/portfolio/painting">Painting</a>
            </Menu.Item>
            <Menu.Item key="Drawing">
               <a style={{ textDecoration: "none" }} href="/portfolio/drawing">Drawing</a> 
            </Menu.Item>
            <Menu.Item key="MixedMedia">
               <a style={{ textDecoration: "none" }} href="/portfolio/mixedmedia">Mixed Media</a> 
            </Menu.Item>
            <Menu.Item key="Design">
               <a style={{ textDecoration: "none" }} href="/portfolio/design">Design</a> 
            </Menu.Item>
         </SubMenu>
         <Menu.Item key="baking">
          <a style={{ textDecoration: "none" }} href="/baking">The BakerLee</a>
         </Menu.Item>
      </Menu>
    );
  }
}
export default NavigationBar;