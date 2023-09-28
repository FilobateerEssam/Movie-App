import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from "../Images/logo.png";
import { useDispatch } from "react-redux";
import { getAllMovie, getMovieSearch } from "../redux/actions/MovieAction";
const NavBar = () => {

  const dispatch = useDispatch();

  const onsearch = (moviename) => {
    searchMovie(moviename);
  };

  // Search for a movie by name in Api

  const searchMovie = async (moviename) => {

    // handle empty input search because when it empty return page not found

    if (moviename === "") {

      // return getAllMovies(); == dispatch(getAllMovie())
      dispatch(getAllMovie());

    } 
    
    else {
      
    dispatch(getMovieSearch(moviename))
  }
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input
                onChange={(e) => onsearch(e.target.value)}
                type="text"
                className="form-control"
                placeholder="ابحث"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
