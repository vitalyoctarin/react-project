import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./components/hoc/Home";
import Menu from "./components/hoc/Menu";
import "./components/css/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/hoc/About";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {ReactComponent as CatSVG} from "./images/cat-face-svgrepo-com.svg"
import Restaurants from "./components/hoc/Restaurants";
import NotfoundPage from "./components/NotfoundPage";


const App = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavLink to="/" className="navbar-brand m-0" style={{fontSize: '25pt'}}>
                        <CatSVG
                            className="cat-svg"
                        />
                        <p>PrettyCat</p>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                        <Nav>
                            <NavLink to="/about" className="nav-link">О нас</NavLink>
                            <NavLink to="/restaurants" className="nav-link">Рестораны</NavLink>
                            <NavDropdown title="Меню" id="collasible-nav-dropdown">
                                <NavDropdown.Item>
                                    <NavLink
                                        to='/menu'
                                        style={{color: 'black', textDecoration: 'none'}}
                                    >Все позиции
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>Блюда из морепродуктов</NavDropdown.Item>
                                <NavDropdown.Item>Мясные блюда</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/restaurants" element={<Restaurants/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<NotfoundPage/>}/>
                </Routes>
            </div>

        </>
    );
}

export default App;
