import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {ReactComponent as CatSVG} from "../images/cat-face-svgrepo-com.svg"
import classes from './css/Navbar.module.css'

const Navbar = () => {

    let activeStyle = {
        opacity: "50%",
    };

    return (
        <nav>
            <div className={classes.product_cat}>
                <CatSVG/>
            </div>
            <div>
                <NavLink
                    to='/'
                    style={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }
                >Главная</NavLink>
                <NavLink
                    to='menu'
                    style={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }
                >Меню</NavLink>
                <NavLink
                    to='about'
                    style={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }
                >О нас</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;