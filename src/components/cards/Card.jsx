import Card from "react-bootstrap/Card";

function SimpleCard() {
  return (
    <Card className="text-center bg-secondary text-white my-5 py-4">
      <Card.Body>
        <p>
          Random choices not for you? No problem, choose from our totally
          factual rankings from each medium below that are guaranteed to provide the best experience out there!
        </p>
      </Card.Body>
    </Card>
  );
}

export default SimpleCard;
