/* eslint-disable max-len */
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/detail.css';

const Detail = () => {
  const animes = useSelector((state) => state.animes.animes);
  const { title } = useParams();
  return (
    <>
      {animes
        .filter((anime) => anime.title === title)
        .map((anime) => (
          <div className="anime-detail-container" key={anime.id}>
            <img src={anime.img} alt={anime.title} />
            <h3 className="anime-detail-title">{anime.title}</h3>
            <p className="anime-detail-description">
              <span>Description:</span>
              <br />
              {anime.description}
            </p>
            <p className="anime-detail-year">{`Release Date: ${anime.year}`}</p>
            <p className="anime-detail-type">{`Type : ${anime.type}`}</p>
            <p className="anime-detail-episodes">{`Episodes: ${anime.episodes}`}</p>
            <p className="anime-detail-rating">{`Allowed Just For: ${anime.rating}`}</p>
          </div>
        ))}
    </>
  );
};

export default Detail;
