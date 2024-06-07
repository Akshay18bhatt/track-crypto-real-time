import React from "react";
import "./app.css"
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CryptoContextProvider } from "./context";

const App = ()=>{

    return(
        <CryptoContextProvider>
        <BrowserRouter>
        <div className="app" >
            <Navbar />
            <Routes>
                <Route path="/"  element={<Homepage />} />
                <Route path="*"  element={<h3>404 Page not found</h3>} />
            </Routes>
        </div>
        </BrowserRouter>
        </CryptoContextProvider>
    )
}

export default App
