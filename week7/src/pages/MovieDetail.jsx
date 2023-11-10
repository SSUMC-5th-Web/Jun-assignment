import React from "react";
import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
const posterURL = "https://image.tmdb.org/t/p/w500/";

export const Container = styled.div`
  display: flex;
  margin-left: 400px;
  margin-top: 40px;
`;
export const MovieImg = styled.img`
  width: 400px;
`;
export const MovieTitle = styled.h1``;

function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();
  return (
    <div>
      <Container>
        <MovieImg src={posterURL + state.poster_path} alt="포스터 사진" />

        <MovieTitle>{title}</MovieTitle>
      </Container>
    </div>
  );
}

export default MovieDetail;
