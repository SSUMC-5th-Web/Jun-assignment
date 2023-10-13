import React, { useState } from "react";

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
        <div
          className="movie-container"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className="modal">
            <div className="title">{title}</div>
            <div>{overview}</div>
          </div>
          <img src={posterURL + poster_path} alt="포스터 사진!" />
          <div className="movie-info">
            <div>{title}</div>
            <div>{vote_average}</div>
          </div>
        </div>
      ) : (
        <div>
          <div
            className="movie-container"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <img src={posterURL + poster_path} alt="포스터 사진" />
            <div className="movie-info">
              <div>{title}</div>
              <div>{vote_average}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Movie;
