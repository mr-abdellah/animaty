/* eslint-disable react/prop-types */
import '../styles/card.css';

const CardItem = ({
  pending, id, title, img, episodes,
}) => (
  <div className="card-item" id={id} pending={pending}>
    <img src={img} alt={title} />
    <h4 id="card-title">{title}</h4>
    <p>{`Episodes : ${episodes}`}</p>
  </div>
);

export default CardItem;
