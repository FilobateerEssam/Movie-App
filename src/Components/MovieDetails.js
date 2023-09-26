import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import movieTrailer from "movie-trailer";

const MovieDetails = () => {
  const param = useParams();
  const [movie, setMovie] = useState([]);
  const [movieVideo, setMovieVideo] = useState("");
  // get Movie Details from api using axios

  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=4b22e9f6cb1c4958a7c1aa5754794fb4&language=ar`
    );
    setMovie(res.data);
  };

  const getMovieVideo = async (moviename) => {
    movieTrailer(moviename, { multi: true }).then((response) => {
      window.open(response[0], "_blank"); // <- This is what makes it open in a new window.
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4 ">
          <div className="card-detalis  d-flex align-items-center ">
            <img
              className="img-movie w-30"
              src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
              alt="ascad"
            />
            <div className="justify-content-center text-center  mx-auto">
              <p className="card-text-details border-bottom">
                اسم الفيلم: {movie.title}
              </p>
              <p className="card-text-details border-bottom">
                تاريخ الفيلم : {movie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                عدد المقيمين : {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                التقييم : {movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
          <div className="card-story  d-flex flex-column align-items-start">
            <div className="text-end p-4 ">
              <p className="card-text-title border-bottom">القصة:</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story"> {movie.overview} </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center "
        >
        <div className="d-flex justify-content-between" >
          <Link to="/">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2 my-3"
            >
              عوده للرئيسيه
            </button>
          </Link>

          <button
            style={{ backgroundColor: "#b45b35", border: "none" }}
            className="btn btn-primary my-3"
            onClick={() => getMovieVideo(movie.title)}
          >
            مشاهده اعلان الفيلم 
          </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default MovieDetails;
