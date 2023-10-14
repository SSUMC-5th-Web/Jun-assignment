import React, { useState } from "react";
import {
  Modal,
  MovieTitle,
  MovieContainer,
  MovieImg,
  MovieInfo,
} from "./Movie.style";

const posterURL = "https://image.tmdb.org/t/p/w500/";

function Movie({ title, vote_average, poster_path, overview }) {
  const [open, setOpen] = useState(false);
  const handleMouseOver = () => {
    setOpen(true);
  };
  const handleMouseOut = () => {
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <MovieContainer
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <Modal>
            <MovieTitle>{title}</MovieTitle>
            <div>{overview}</div>
          </Modal>
          <MovieImg src={posterURL + poster_path} alt="포스터 사진!" />
          <MovieInfo>
            <div>{title}</div>
            <div>{vote_average}</div>
          </MovieInfo>
        </MovieContainer>
      ) : (
        <MovieContainer
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <MovieImg src={posterURL + poster_path} alt="포스터 사진!" />
          <MovieInfo>
            <div>{title}</div>
            <div>{vote_average}</div>
          </MovieInfo>
        </MovieContainer>
      )}
    </>
  );
}

export default Movie;
