import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "../App.css";

const Navbar = () => {

    
    return (
        <nav className="navbar">
            <img className = "logo" src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png" width="50" height="50"></img>
            <h3 className="title">FoodToGo</h3>
            <ul className="nav-links">
                <Link to="/" className="home">
                    <li>Home</li>
                </Link>
                <Link to="/additem" className="additem">
                    <li>Add Item</li>
                </Link>
            </ul>

        </nav>

    );
};

export default Navbar;