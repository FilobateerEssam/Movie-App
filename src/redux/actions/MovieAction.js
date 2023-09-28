import { AllMovies, AllMoviesApi } from "../types/MoviesTypes";
import axios from "axios";

export const getAllMovie = () => {
  // higher order function
  return async (dispatch) => {
    const res = await axios.get(AllMoviesApi);
    if (res.data.total_pages > 500) {
      dispatch({
        type: AllMovies,
        data: res.data.results,
        pages: 500,
      });
      
    } else {
      dispatch({
        type: AllMovies,
        data: res.data.results,
        pages: res.data.total_pages,
      });
    }
  };
};

export const getMovieSearch = (moviename) => {
  // higher order function
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=4b22e9f6cb1c4958a7c1aa5754794fb4&query= ${moviename} &language=ar`
    );

    if (res.data.total_pages > 500) {
      dispatch({
        type: AllMovies,
        data: res.data.results,
        pages: 500,
      });
      
    } else {
      dispatch({
        type: AllMovies,
        data: res.data.results,
        pages: res.data.total_pages,
      });
    }
  };
};

export const getpage = (page) => {
  // higher order function
  return async (dispatch) => {
    const res = await axios.get(
      ` https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=4b22e9f6cb1c4958a7c1aa5754794fb4`
    );

    dispatch({
      type: AllMovies,
      data: res.data.results,
      pages: 500,
    });
  };
};
