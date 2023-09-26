import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PageNotFound from "./PageNotFound";
import PaginationPages from "./Pagination";
const MoviesList = ({ movies , getpage , PageCount}) => {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />;
        })
      ) : (
        <PageNotFound />
        // <h2 className="text-center" style={{ color: "red" }}>
        //   لا يوجد افلام لعرضها .....
        // </h2>
      )}
      {
        movies.length >= 1 ? (
          <PaginationPages getpage={getpage} PageCount={PageCount} />
        ) : (null)
      }
      
    </Row>
  );
};

export default MoviesList;
