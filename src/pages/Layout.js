import React from "react";
import { Layout as Format} from 'antd';
import NavigationBar from "./../navigation/NavigationBar/NavigationBar";
import "./../App.css";

const { Header, Content, Footer } = Format;

const Layout = ({children}) => {
   return (
      <Format>
         <Header style={{ backgroundColor: '#ebe4de', padding: '0px 50px' }}>
            <NavigationBar />
         </Header>
         <Content style={{ backgroundColor: '#ffffff', padding: '50px 50px' }}> 
            <div className="site-layout-content">
               { children }
            </div> 
         </Content>
         <Footer style={{ backgroundColor: '#ffffff', textAlign: 'center', fontWeight: 'lighter', fontName: "Khula" }}>
            © Irena Lee 2023
         </Footer>
      </Format>
   )
 }

 export default Layout;