import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { removeFromList } from '../../reducers/List';
import { useDispatch } from 'react-redux';

function ListCard(item) {

    const dispatch = useDispatch()

    const handleRemoveFromList = () => {
      dispatch(removeFromList(item))
    }

  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{item.item.title}</Card.Title>
        <Card.Text>
          {item.item.author}
         { console.log(item)}
        </Card.Text>
        <Button variant="primary" onClick={handleRemoveFromList}>Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default ListCard;