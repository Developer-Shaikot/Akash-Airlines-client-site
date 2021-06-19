import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Services from '../Services/Services';

import Footer from '../Footer/Footer';
import Project from '../Projects/Project';

const Header = () => {
    return (
        <div class="header">
           <Navbar></Navbar>
           <HeaderMain></HeaderMain>
           <BusinessInfo></BusinessInfo>
           <Services></Services>
           <Footer></Footer>
        </div>
    );
};

export default Header;