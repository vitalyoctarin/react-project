import React from 'react';
import {Link, NavLink} from "react-router-dom";
import classes from './css/Navbar.css'

const Navbar = () => {

    let activeStyle = {
        opacity:"50%",
    };

    return (
        <nav>
            <NavLink
                to='/'
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >Главная</NavLink>
            <NavLink
                to='menu'
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >Меню</NavLink>
            <NavLink
                to='about'
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >О нас</NavLink>
        </nav>
    );
};

export default Navbar;