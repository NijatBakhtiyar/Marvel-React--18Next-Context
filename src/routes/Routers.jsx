import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" >
        <Route path=":name" element={<Movie />} />
      </Route>
    </Routes>
  );
}

export default Routers;