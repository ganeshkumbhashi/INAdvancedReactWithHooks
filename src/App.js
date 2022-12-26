import React, { useEffect, useState } from "react";
import { data } from "./data";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App()
{

    return(<>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="*" element={<Error/>} />
                </Routes>
            </Router>
    </>);

}

export default App;