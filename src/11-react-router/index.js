import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './Navbar';
import Home from './Home'
import About from './About'
import Error from './Error'
import People from './People'
import Person from "./Person";


const ReactRouterSetup = () =>{


    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path = "/" caseSensitive={false} element={<Home/>} />
                <Route path="/about" caseSensitive={false} element = {<About/>} />
                <Route path="/people" caseSensitive={false} element = {<People/>} />

                <Route path="/person/:id" element={<Person/>} />

                <Route path="*" caseSensitive={false} element = {<Error/>} />
            </Routes>
        </Router>
    )
}

export default ReactRouterSetup;