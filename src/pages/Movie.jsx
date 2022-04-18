import React from "react";
import { useMoviesContext } from "../context/MoviesContext";
import { useTranslation } from "react-i18next";

function Movie() {
  const { selectedMovie } = useMoviesContext();
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="movie">
        <div className="image">
          <img src={selectedMovie?.thumbnail.path + "/portrait_uncanny.jpg"} alt={selectedMovie?.name} />
        </div>
        <div className="info">
          <h1><span>{t("movie.name")}</span>{selectedMovie?.name}</h1>
          <p><span>{t("movie.description")}</span>{selectedMovie?.description}</p>
          <p><span>{t("movie.modified")}</span>{(new Date(selectedMovie.modified).getFullYear())}</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;