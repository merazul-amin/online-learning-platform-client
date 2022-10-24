import React from 'react';
import HeaderNav from '../SharedPages/HeaderNav/HeaderNav';
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;