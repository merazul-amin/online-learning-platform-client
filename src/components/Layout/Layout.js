import React from 'react';
import HeaderNav from '../SharedPages/HeaderNav/HeaderNav';
import { Outlet } from "react-router-dom";
import Footer from '../SharedPages/Footer/Footer';
const Layout = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;