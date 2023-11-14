import Movie from "../Components/Movie";
import { tvDummy } from "../tvDummy";
import { AppContainer } from "../Components/Movie.style";

function Tv() {
  return (
    <AppContainer>
      {tvDummy.results.map((item) => {
        return (
          <>
            <Movie
              title={item.name}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          </>
        );
      })}
    </AppContainer>
  );
}
export default Tv;
