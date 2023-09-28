import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import MoviesList from "./Components/MoviesList";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes , Route , Link } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "./redux/actions/MovieAction";
 

function App() {
  
  return (
    <div className="font color-body">
      <NavBar   />
      <Container>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MoviesList   />}  />
        <Route path="/movie/:id" element={<MovieDetails  /> }  />
        </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
