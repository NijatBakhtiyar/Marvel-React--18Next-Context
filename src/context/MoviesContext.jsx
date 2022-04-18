/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";

const MoviesContext = React.createContext();
import i18n from "../i18next";

function MoviesProvider({ children }) {
    const [searchMovies, setSearchMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [langActive, setLangActive] = useState("tr");

    function clickMovie(movie) {
        setSelectedMovie(movie);
    }


    function changeLang(lang) {
        setLangActive(lang);
        i18n.changeLanguage(lang);
    }

    return (
        <MoviesContext.Provider
            value={{ searchMovies, setSearchMovies, clickMovie, selectedMovie, changeLang, langActive }}
        >

            {children}

        </MoviesContext.Provider>
    );
}

function useMoviesContext() {
    return useContext(MoviesContext);
}

export { MoviesProvider, MoviesContext, useMoviesContext };
