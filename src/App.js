import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/style.css";
import "./css/index.css";
import Header from "./layouts/Header"
import Home from './components/Home'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element=<Home /> />
                <Route path="/home" element=<Home /> />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
