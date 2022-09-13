import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import About from "./pages/About";
import Home from "./pages/Home";

import Xiao2 from "./lern/Xiao/Xiao02";

import "./styles/style.css";

function App() {
    return (
        <div className="App">
            <Nav />
            
            <Routes>
                <Route path="/" element={<Home />} exact/>
                <Route path="/about" element={<About />} exact/>
            </Routes>
            <Xiao2 />
        </div>
    );
}

export default App;