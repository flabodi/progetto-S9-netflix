import { Component } from "react";
import { Col } from "react-bootstrap";
const URL = "https://www.omdbapi.com/?apikey=12f1c1ac&s=";

class FilmRow extends Component {
  state = {
    search: [],
  };

  fetchMovies = () => {
    const movieKey = this.props.movieKey;
    fetch(URL + movieKey)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nella chiamata ");
        }
      })
      .then((data) => {
        const films = data.Search.slice(0, 6);
        this.setState({ search: films });
        console.log(" risposta json dal server ", films);
      })
      .catch((e) => {
        console.log("errore", e);
      });
  };
  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <>
        {this.state.search.map((film, i) => {
          return (
            <Col key={i} className="px-1 ">
              <img
                className="img-fluid "
                src={film.Poster}
                alt={film.Title}
                style={{ width: "100%", height: "95%" }}
              />
            </Col>
          );
        })}
      </>
    );
  }
}
export default FilmRow;
