import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Movie from "./Components/Movie";
import { movies } from "./movieDummy";
function App() {
  return (
    <div className="app-container">
      {movies.results.map((item) => {
        return <Movie />;
      })}
    </div>
  );
}

export default App;
