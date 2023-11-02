import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import Celebirity from "./pages/Celebirity";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/celeb" element={<Celebirity />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
