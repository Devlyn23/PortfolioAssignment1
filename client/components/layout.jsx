/*File: layout.jsx
Name: Devlyn Andersen
Student Number: 301444288
Date: 2024-09-27
*/

/*---------------------------------------------
               Import Assets:
---------------------------------------------*/
import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../src/assets/Logo.png';

/*---------------------------------------------
          Layout Function:
---------------------------------------------*/
export default function Layout() {
    /*---------------------------------------------
    Create all HTML Elements for layout
    ---------------------------------------------*/
    return (
    <>
        {/*Section for defining the HTML for the topbar to be Displayed*/}
        <div className="topBar">
            <img src={logo1}alt="logo" className="logo" width="100px" height="100px"/>
        </div>

        {/*Section for defining the HTML for the title to be Displayed*/}
        <div className="titleBar">
            <h1 className="layTitle">Devlyn Andersen: Portfolio</h1>
        </div>
        <hr className="menuline"/>

        {/*Section for defining the HTML for the navigation menu to be Displayed*/}
        <div className="navcon">
            <nav>
                <Link className="navig" to="/">Home</Link><Link className="navig" to="/about">About</Link><Link className="navig" to="/service">Services</Link><Link className="navig" to="/project">Projects</Link><Link className="navig" to="/contact">Contact</Link>
            </nav>
            <hr className="menuline"/>
        </div>
    </>
    );
}
