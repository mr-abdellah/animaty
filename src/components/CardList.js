/* eslint-disable react/prop-types */
import '../styles/card.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Card from './Card';
import { loadAnime } from '../redux/cards';

const CardList = ({ animes }) => {
  const { pending } = useSelector((state) => state.animes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAnime());
  }, []);

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
