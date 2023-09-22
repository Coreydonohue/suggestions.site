import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FluidImage from "./Image";
import { Button } from "react-bootstrap";
import SimpleCard from "./cards/Card";
import GroupCards from "./cards/GroupCard";
import { Link } from "react-router-dom";
import Quiz from "../pages/Quiz";

function Grids() {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col sm={7}>
          <FluidImage />
        </Col>
        <Col sm={5}>
          <h1 className="font-weight-light">Suggestion Generator</h1>
          <p>
            Feeling a bit bored and in need of some entertainment? Look no
            further! Welcome to our interactive book and movie ranking site,
            designed to help you discover the perfect piece of media.
          </p>
          <p>
            Are you tired of endlessly scrolling, struggling to find the next
            great book to read, or searching for a captivating movie
            to watch? Our rankings are here to save the day with
            un-deniably fantastic suggestions that are not opinionated in any
            way.
          </p>
        </Col>
      </Row>
      <Row className="gridRow">
        <SimpleCard />
      </Row>
      <Row className="basicCards">
        <GroupCards />
      </Row>
      <footer className="py-5 my-5 bg-dark">
        <Container className="px-4">
          <p className="text-center text-white">It's facts yall</p>
        </Container>
      </footer>
    </Container>
  );
}

export default Grids;
