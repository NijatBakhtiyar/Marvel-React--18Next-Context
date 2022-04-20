import React from "react";
import { useMoviesContext } from "../context/MoviesContext";
import { useTranslation } from "react-i18next";
import LanguageButtons from "../components/LanguageButtons";

function Movie() {
  const { selectedMovie } = useMoviesContext();
  const { t } = useTranslation();

  return (
    <div className="container">
      <LanguageButtons />
      <div className="movie">
        <div className="image">
          <img src={selectedMovie?.thumbnail.path + "/portrait_uncanny.jpg"} alt={selectedMovie?.name} />
        </div>
        <div className="info">
          <h1><span>{t("movie.name")}</span>{selectedMovie?.name}</h1>
          <p>
            <span>{t("movie.description")}</span>
            <span className="text">{selectedMovie?.description}</span>
          </p>
          <p>
            <span>{t("movie.modified")}</span>
            <span className="text">{(new Date(selectedMovie.modified).getFullYear())}</span>
          </p>
          <p>
            <span>{t("movie.series")}</span>
            {selectedMovie?.series?.items.slice(0, 10).map((value, index) => (<span key={index} className="text">{value.name + ", "}</span>))}
          </p>
          <p>
            <span>{t("movie.films")}</span>
            {selectedMovie?.comics?.items.slice(0, 10).map((value, index) => (<span key={index} className="text">{value.name + ", "}</span>))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie;