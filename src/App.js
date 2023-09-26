import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import MoviesList from "./Components/MoviesList";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes , Route , Link } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
 
function App() {
  const [movies, setMovies] = useState([]);
  const [PageCount, setPageCount] = useState(0);
  // get data from api using axios

  const getAllMovies = async () => {
    const res = await axios.get(
      // "https://api.themoviedb.org/3/movie/popular?api_key=4b22e9f6cb1c4958a7c1aa5754794fb4&language=ar"
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&api_key=4b22e9f6cb1c4958a7c1aa5754794fb4"
    );
    setMovies(res.data.results);
    if (res.data.total_pages > 500) {
      setPageCount(500);
    } else {
      setPageCount(res.data.total_pages);
    }
  };

  // get the current data inside page from api using axios

  const getpage = async (page) => {
    const res = await axios.get(
      `    https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=4b22e9f6cb1c4958a7c1aa5754794fb4`
    );
    setMovies(res.data.results);
    if (res.data.total_pages > 500) {
      setPageCount(500);
    } else {
      setPageCount(res.data.total_pages);
    }
  };

  // to call when the page is loaded

  useEffect(() => {
    getAllMovies();

    console.log(movies);
  }, []);

  // Search for a movie by name in Api

  const searchMovie = async (moviename) => {
    // handle empty input search because when it empty return page not found

    if (moviename === "") {
      return getAllMovies();
    }

    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=4b22e9f6cb1c4958a7c1aa5754794fb4&query= ${moviename} &language=ar`
    );

    setMovies(res.data.results);

    if (res.data.total_pages > 500) {
      setPageCount(500);
    } 
    else {
      setPageCount(res.data.total_pages);
      console.log(res.data.total_pages);
    }
  };

  return (
    <div className="font color-body">
      <NavBar search={searchMovie} />
      <Container>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MoviesList movies={movies} getpage={getpage} PageCount={PageCount} />}  />
        <Route path="/movie/:id" element={<MovieDetails  /> }  />
        </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
