import { AllMovies } from "../types/MoviesTypes";

const initialvalue = { movies: [], pageCount: 0 };

export const MovieReducer = (state = initialvalue, action) => {

  switch (action.type) {

    case AllMovies:
      return { movies: action.data , pageCount: action.pages};

    default:
        return state;
  }
};

