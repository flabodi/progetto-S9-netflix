import { Container, Row } from "react-bootstrap";
import FilmRow from "./FilmRow";

const MainPage = function () {
  return (
    <>
      <Container fluid className="bg-black text-white  " >
        <h2 className="ms-3"> Tending Now</h2>
        <Row xs={1} sm={2} md={3} lg={6} className="mx-3 mb-4">
          <FilmRow movieKey="Harry Potter " />
        </Row>
        <h2 className="ms-3">Watch it Again</h2>
        <Row xs={1} sm={2} md={3} lg={6} className="mx-3 mb-4">
          <FilmRow movieKey="lord of the rings  " />
        </Row>
        <h2 className="ms-3">New Releases </h2>
        <Row xs={1} sm={2} md={3} lg={6} className="mx-3 mb-4">
          <FilmRow movieKey="star wars " />
        </Row>
      </Container>
    </>
  );
};
export default MainPage;
