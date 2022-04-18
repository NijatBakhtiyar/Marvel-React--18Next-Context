import React from "react";
import { useMoviesContext } from "../context/MoviesContext";

function LanguageButtons() {
    const { langActive, changeLang } = useMoviesContext();


    return (
        <div className="language-buttons">
            <button className={langActive === "fr" ? "active" : ""} onClick={() => changeLang("fr")}>FR</button>
            <button className={langActive === "en" ? "active" : ""} onClick={() => changeLang("en")}>EN</button>
            <button className={langActive === "tr" ? "active" : ""} onClick={() => changeLang("tr")}>TR</button>
        </div>
    );
}

export default LanguageButtons;