import MovieModal from "./MovieModal";
import LoadingIcon from "../constants/icons/LoadingIcon";
import { useMoviesContext } from "../context/MoviesContext";
import { useTranslation } from "react-i18next";
import LanguageButtons from "./LanguageButtons";

function Search() {
    const { searchMovies, handleChange, loading, showModal } = useMoviesContext();
    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="row">
                <div className="search">
                    <label>{t("movie.searchChar")}</label>
                    <input type="text" name="movie" placeholder={t("movie.searchName")} onChange={handleChange} autoComplete="off" />
                    {loading && <LoadingIcon />}
                    {searchMovies?.length > 0 && showModal && <MovieModal movies={searchMovies} />}
                </div>
                <LanguageButtons />
            </div>
        </div>
    );
}

export default Search;
