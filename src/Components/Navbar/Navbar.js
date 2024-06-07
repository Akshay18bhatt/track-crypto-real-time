import React from "react";
import "./navbar.css"
import { Link } from "react-router-dom";
import { useCryptoContext } from "../../context";

const Navbar= ()=>{

    const{currency, setCurrency}= useCryptoContext();
    console.log(currency);

    return(
        <div className="navbar" >
            <h1>
                CryptoTracker.
            </h1>
            <div className="links" >
                <Link to={"/dashboard"} >Dashboard</Link>
                <Link to={"/compare"} >Compare</Link>
                <Link to={"/watchlist"} >WatchList</Link>
                <select
                    value={currency}
                    onChange={(e)=>setCurrency(e.target.value)}
                >
                    <option value="inr" >INR</option>
                    <option value="usd" >USD</option>
                </select>
            </div>
        </div>
    )
}

export default Navbar