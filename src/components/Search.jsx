import React, { useState } from "react";
import Axios from "../constants/Axios";
import MovieModal from "./MovieModal";
import LoadingIcon from "../constants/icons/LoadingIcon";
import { useMoviesContext } from "../context/MoviesContext";
import { useTranslation } from "react-i18next";
import LanguageButtons from "./LanguageButtons";

function Search() {
    const { searchMovies, setSearchMovies } = useMoviesContext();
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState(null);
    const { t } = useTranslation();

    function handleChange(e) {
        if (e.target.value.length > 0) {
            setLoading(true);
            setInput(e.target.value);
        }
        Axios(e.target.value).then(result => {
            setSearchMovies(result);
            setLoading(false);
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="search">
                    <label>{t("movie.searchChar")}</label>
                    <input type="text" name="movie" placeholder={t("movie.searchName")} onChange={handleChange} autoComplete="off" />
                    {loading && <LoadingIcon />}
                    {searchMovies?.length > 0 && input && <MovieModal movies={searchMovies} />}
                </div>
                <LanguageButtons />
            </div>
        </div>
    );
}

export default Search;
