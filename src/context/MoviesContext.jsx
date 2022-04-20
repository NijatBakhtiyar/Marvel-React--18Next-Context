/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import Axios from "../constants/Axios";

const MoviesContext = React.createContext();
import i18n from "../i18next";

function MoviesProvider({ children }) {
    const [searchMovies, setSearchMovies] = useState([]);
    const [langActive, setLangActive] = useState("tr");
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(null);

    // GO TO MOVIE PAGE
    function clickMovie(movie) {
        setSelectedMovie(movie);
    }

    // SORT ARRAY BY MODIFIED YEARS
    function sortModified(data) {
        data = data.sort((a, b) => (new Date(b.modified).getFullYear()) - (new Date(a.modified).getFullYear())).slice(0, 10);

        return data;
    }

    // SEARCH MOVIE
    function handleChange(e) {
        if (e.target.value.length > 0) {
            setLoading(true);
            Axios(e.target.value).then(result => {
                setSearchMovies(sortModified(result));
                setLoading(false);
            });
        }
        setShowModal(e.target.value);
    }

    // CHANGE PAGE LANGUAGE
    function changeLang(lang) {
        setLangActive(lang);
        i18n.changeLanguage(lang);
    }

    return (
        <MoviesContext.Provider
            value={{ searchMovies, setSearchMovies, clickMovie, selectedMovie, changeLang, langActive, handleChange, loading, showModal, setShowModal }}
        >

            {children}

        </MoviesContext.Provider>
    );
}

function useMoviesContext() {
    return useContext(MoviesContext);
}

export { MoviesProvider, MoviesContext, useMoviesContext };
