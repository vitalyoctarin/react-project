import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/hoc/Home";
import Menu from "./components/hoc/Menu";
import Navbar from "./components/navbar";
import "./components/css/App.css"
import About from "./components/hoc/About";

const App = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>

        </>
    );
}

export default App;
