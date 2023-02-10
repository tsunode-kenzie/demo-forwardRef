import { Link } from "react-router-dom";
import { Container } from "./styles";

const Card = ({book}) => {
  return (
    <Container>
      <Link to={`${book.id}`}>
        <img src={book.cover} alt={book.name} />
        <p>{book.name}</p>
        <p>{book.art}</p>
      </Link>
    </Container>
  );
};

export default Card;
