import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addToList } from "../../reducers/List";
import { useDispatch } from "react-redux";


function BookCard(book) {

  const dispatch = useDispatch()

  const handleAddToList = () => {
    dispatch(addToList(book))
    console.log(book)
  }

  return (
    <div className="BooksCard">
      <Card className="text-center">
        <Card.Header>Rank: {book.rank}</Card.Header>
        <Card.Body>
          <Card.Title><h1>{book.title}</h1></Card.Title>
          <h5>Author: {book.author} </h5>
          <Card.Text>{book.description}</Card.Text>
          <Button variant="primary" onClick={handleAddToList}>Add to my list</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookCard;
