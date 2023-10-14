import Movie from "./Components/Movie";
import { movies } from "./movieDummy";
import { AppContainer } from "./Components/Movie.style";
function App() {
  return (
    <AppContainer>
      {movies.results.map((item) => {
        return (
          <Movie
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview={item.overview}
          />
        );
      })}
    </AppContainer>
  );
}

export default App;
