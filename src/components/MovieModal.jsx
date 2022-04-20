import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMoviesContext } from "../context/MoviesContext";


function MovieModal({ movies }) {
  const { clickMovie, setShowModal } = useMoviesContext();
  const { t } = useTranslation();

  return (
    <div className="movie-modal">
      {movies?.map(movie => (
        <Link to={`/movie/${movie.name}`} onClick={() => (clickMovie(movie), setShowModal(null))} key={movie.id}>{t("movie.charName")} {movie.name}</Link>
      ))}
    </div>
  );
}

export default MovieModal;
