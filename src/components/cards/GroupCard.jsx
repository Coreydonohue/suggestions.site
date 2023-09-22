import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Button } from "react-bootstrap";
import Books from "../../pages/Books";
import { Link } from "react-router-dom";

function GroupCards() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://picsum.photos/id/24/320/200" />
        <Card.Body>
          <Card.Title>Best Books</Card.Title>
          <Card.Text>
            Indisputable list of the greatest books out there. Click inside to
            see the full list. Be sure to check the ranks for the best one!
          </Card.Text>
          <Link to="/bookranking">
            <Button variant="primary">Go to book rankings</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://picsum.photos/id/12/320/200" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            Indisputable list of the greatest movies out there. Click inside to
            see the full list. Be sure to check the ranks for the best one!
          </Card.Text>
          <Link to='/movieranking'>
            <Button variant="primary">Go to book rankings</Button>{" "}
          </Link>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupCards;
