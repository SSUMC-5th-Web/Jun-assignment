import React from "react";
import { MovieContainer, MovieImg, MovieInfo } from "./Movie.style";
import { useNavigate } from "react-router-dom";

const posterURL = "https://image.tmdb.org/t/p/w500/";

function Movie(props) {
  const navigate = useNavigate();

  const handleOpen = () => {
      navigate(`/movie/${props.title}`, {
        state: props
    });
  };

  return (
    <div>
      <MovieContainer onClick={handleOpen}>
        <MovieImg src={posterURL + props.poster_path} alt="포스터 사진" />
        <MovieInfo>
          <div>{props.title}</div>
          <div>{props.vote_average}</div>
        </MovieInfo>
      </MovieContainer>
    </div>
  );
}

export default Movie;
