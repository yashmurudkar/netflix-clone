import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
