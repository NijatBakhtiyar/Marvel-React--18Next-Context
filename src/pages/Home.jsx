import React from "react";
import Header from "../components/Header";
import MovieLists from "../components/MovieLists";
import Search from "../components/Search";

function Home() {
    return (
        <>
            <Header />
            <Search />
            <MovieLists />
        </>
    );
}

export default Home;
