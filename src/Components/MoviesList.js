import React, { useEffect, useState } from "react";
import { Row, Card, Col } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PageNotFound from "./PageNotFound";
import PaginationPages from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "../redux/actions/MovieAction";
const MoviesList = ({  getpage , PageCount}) => {

  const [movies, setMovies] = useState([]);

const dispatch = useDispatch();

// to call when the page is loaded 
useEffect(() => {
  //getAllMovies();

  console.log(movies);
  dispatch(getAllMovie())

}, []);


const dataMovies = useSelector((state)=> state.movies)


// to reload the page when the data is changed
useEffect(() => {

  setMovies(dataMovies);

}, [dataMovies]);


  return (
    <Row className="mt-3">
      {dataMovies.length >= 1 ? (
        dataMovies.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />;
        })
      ) : (
        <PageNotFound />
        // <h2 className="text-center" style={{ color: "red" }}>
        //   لا يوجد افلام لعرضها .....
        // </h2>
      )}
      {
        dataMovies.length >= 1 ? (
          <PaginationPages getpage={getpage} PageCount={PageCount} />
        ) : (null)
      }
      
    </Row>
  );
};

export default MoviesList;
