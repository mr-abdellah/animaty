import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../styles/container.css';

const Container = () => (
  <div className="container">
    <form action="" id="search-bar">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-primary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
    </form>
  </div>
);

export default Container;
