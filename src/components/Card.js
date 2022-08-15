import '../styles/card.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardItem = ({
  title, img, episodes,
}) => (
  <div className="card-item">
    <img src={img} alt={title} />
    <h4 id="card-title">{title}</h4>
    <p>{`Episodes : ${episodes}`}</p>
    <Link id="card-btn" to={`/anime/${title}`}>More Details</Link>
  </div>
);

CardItem.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  episodes: PropTypes.number,
};

CardItem.defaultProps = {
  title: '',
  img: null,
  episodes: null,
};

export default CardItem;
