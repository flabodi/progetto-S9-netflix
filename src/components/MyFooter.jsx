import { Col, Container, ListGroup, Row } from "react-bootstrap";

const MyFooter = function () {
  return (
    <>
      <footer className=" bg-black text-secondary h-100">
        <Container >
          <Row>
            <Col lg={3} sm={3} >
              <div>
              <i className="bi bi-facebook footer-icon me-2"></i>
                  <i className="bi bi-instagram footer-icon me-2"></i>
                  <i className="bi bi-twitter-x footer-icon me-2"></i>
                  <i className="bi bi-youtube footer-icon"></i>
                <ListGroup.Item className="my-2">Audio and Subtitles </ListGroup.Item>
                <ListGroup.Item className="my-2" >Media Center </ListGroup.Item>
                <ListGroup.Item className="my-2">Privacy </ListGroup.Item>
                <ListGroup.Item className="my-2">Contact us </ListGroup.Item>
                <button type="button " className="bg-black border text-secondary my-2">Service Code</button>
                <br/>
                <span className="my-2" >C 1997-2023 Netflix, Inc.</span>
              </div>
            </Col >
            <Col lg={3} sm={3}>
              <div>
                <ListGroup.Item className="my-2"  >Audio  Description </ListGroup.Item>
                <ListGroup.Item className="my-2">Investor Relations </ListGroup.Item>
                <ListGroup.Item className="my-2">Legal Notices </ListGroup.Item>
              </div>
            </Col>
            <Col lg={3} sm={3} >
              <div>
                <ListGroup.Item className="my-2">Help Center </ListGroup.Item>
                <ListGroup.Item className="my-2">Jobs </ListGroup.Item>
                <ListGroup.Item className="my-2">Cookie Preference </ListGroup.Item>
              </div>
            </Col>
            <Col lg={3} sm={3}>
              <div>
                <ListGroup.Item className="my-2">Gift Cards </ListGroup.Item>
                <ListGroup.Item className="my-2">Terms of Use </ListGroup.Item>
                <ListGroup.Item className="my-2">Corporate Information </ListGroup.Item>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default MyFooter;
