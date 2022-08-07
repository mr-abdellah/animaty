/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../styles/container.css';
import { useSelector } from 'react-redux';
import CardList from './CardList';

const Container = () => {
  const animes = useSelector((state) => state.animes.animes);
  const [query, setQuery] = useState('');
  const search = () => animes.filter((anime) => (
    anime.title.toLowerCase().includes(query.toLocaleLowerCase())
      || anime.description.toLowerCase().includes(query.toLowerCase())
  ));

  const handleSearch = (e) => {
    e.preventDefault();
    search();
  };

  return (
    <div className="container">
      <form action="" id="search-bar">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Anime name ... ?"
            aria-label="Anime name"
            aria-describedby="basic-addon2"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="outline-primary" id="button-addon2" onClick={handleSearch}>
            Search
          </Button>
        </InputGroup>
      </form>
      <CardList animes={search()} />
    </div>
  );
};

export default Container;
