import React from "react";
import { Container, Loader } from "@mantine/core";
import MovieCard from "../movieCard/MovieCard";
import "./movies.css";

const Movies = ({ movies, isLoading, isError }) => {
  if (isLoading) {
    return (
      <Container>
        <Loader
          style={{ width: "100%", justifyContent: "center" }}
          color="blue"
          size="xl"
          type="dots"
        />
      </Container>
    );
  }
  // Check if movies is an array before mapping over it
  if (!Array.isArray(movies)) {
    return <div>No movies found</div>; // Or any other appropriate message or UI
  }
  return (
    <div className="movies_container">
      {movies.map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
