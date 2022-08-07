/* eslint-disable react/prop-types */
import '../styles/card.css';
import { useSelector } from 'react-redux';
import Card from './Card';

const CardList = ({ animes }) => {
  const { pending } = useSelector((state) => state.animes);

  return (
    <div className="cards-container">
      {pending ? (
        <h2>Oups Check Your Network ...</h2>
      ) : (
        animes.map((anime) => (
          <Card
            pending={pending}
            key={anime.id}
            title={anime.title}
            description={anime.description}
            id={anime.id}
            img={anime.img}
            type={anime.type}
            episodes={anime.episodes}
            rating={anime.rating}
            year={anime.year}
          />
        ))
      )}
    </div>
  );
};

export default CardList;
