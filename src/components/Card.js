/* eslint-disable react/prop-types */
import '../styles/card.css';
import { Link } from 'react-router-dom';

const CardItem = ({
  id, title, img, episodes,
}) => (
  <div className="card-item" id={id}>
    <img src={img} alt={title} />
    <h4 id="card-title">{title}</h4>
    <p>{`Episodes : ${episodes}`}</p>
    <Link id="card-btn" to={`/anime/${title}`}>More Details</Link>
  </div>
);

export default CardItem;
