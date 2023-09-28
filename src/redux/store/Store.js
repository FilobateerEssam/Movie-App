import { createStore , applyMiddleware } from "redux";
import { MovieReducer } from "../reducers/MoviesReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// 1. Create a Store with a Reducer

export const storeMovie = createStore(MovieReducer ,applyMiddleware(thunk))


  