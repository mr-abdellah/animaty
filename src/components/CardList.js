import { useSelector } from 'react-redux';
import '../styles/card.css';
import Card from './Card';

const CardList = () => {
  const { animes, pending } = useSelector((state) => state.animes);

  return (
    <div className="cards-container">
      {animes.map((anime) => (
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
      ))}
    </div>
  );
};

export default CardList;
