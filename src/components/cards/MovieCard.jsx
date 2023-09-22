import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addToList } from "../../reducers/List";
import { useDispatch } from "react-redux";


function MovieCard(movie) {

  const dispatch = useDispatch()

  const handleAddToList = () => {
    dispatch(addToList(movie))
  }

  return (
    <div className="movieCard">
      <Card className="text-center">
        <Card.Header>Rank: {movie.rank}</Card.Header>
        <Card.Body>
          <Card.Title><h1>{movie.title}</h1></Card.Title>
          <h5>Director: {movie.director} </h5>
          <h6>Genre: {movie.genre} </h6>
          <Card.Text>{movie.description}</Card.Text>
          <Button variant="primary" onClick={handleAddToList}>Add to my list</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
