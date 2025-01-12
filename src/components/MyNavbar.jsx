import { Container, Nav, NavDropdown, Navbar, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";
const MyNavbar = function () {
  return (
    <>
      <header>
        <Navbar expand="lg" bg="black" variant="dark">
          <Container fluid className="m-0 p-0">
            <Navbar.Brand href="#home" className="ms-0 ps-0">
              <img
                src={logo}
                alt="logo netflix"
                className="d-inline-block align-top m-0"
                width={130}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav  " />
            <Navbar.Collapse id="basic-navbar-nav  ">
              <Nav className="me-auto ps-0 ms-sm-4">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Movies</Nav.Link>
                <Nav.Link href="#link">Recently Added</Nav.Link>
                <Nav.Link href="#link">My List</Nav.Link>
              </Nav>
              <Nav className="ms-auto ms-sm-4 ">
                <i className="bi bi-search icons me-3 mt-2 text-white"></i>
                <i className="bi bi-bell icons me-3 mt-2  text-white"></i>
                <i className="bi bi-person-circle mt-2  me-3 icons text-white"></i>
                <NavDropdown title="Option" id="basic-nav-dropdown" className="me-sm-4">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container fluid className="bg-black " style={ {height:'100px'}}>
          <Row className=" d-flex   text-white" >
            <Col lg={12}>
              <Row>
                <Col lg={1} sm={3}>
                  <h2>Tv Show</h2>
                </Col>
                <Col lg={4} sm={2}>
                  <NavDropdown
                    title="Genres"
                    className="mt-1 pt-2 border  text-center" style={{height:'50px', width:'90px'}}
                  ></NavDropdown>
                </Col>
                <Col lg={7} sm={7}>
                  <div className="text-end m-2">
                    <i className="bi bi-grid icons border px-3 py-2  text-secondary  "></i>
                    <i className="bi bi-grid-3x3 icons border text-secondary px-3 py-2"></i>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};
export default MyNavbar;
