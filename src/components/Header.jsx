import React from "react";
import backImg from "../img/background.png";
import marvelImg from "../img/marvel.png";

function Header() {
    return (
        <div className="intro">
            <div className="back-img">
                <img src={backImg} alt="intro-back" />
            </div>
            <div className="marvel-img">
                <img src={marvelImg} alt="marvel-logo" />
            </div>
        </div>
    );
}

export default Header;