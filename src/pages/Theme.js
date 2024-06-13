import { useEffect, useState } from 'react';
import { axiosData } from '../api/axiosData';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function Theme() {
  const [axiosResults, setAxiosResults] = useState([]);
  const [gameId, setGameId] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = () => {
    if (gameId) {
      const filtered = axiosResults.filter((game) => game.id === parseInt(gameId));
      setFilteredResults(filtered);
    } else {
      setFilteredResults(axiosResults);
    }
  };

  useEffect(() => {
    axiosData()
      .then((data) => {
        setAxiosResults(data);
        setFilteredResults(data); // Initially display all results
      })
      .catch((error) => console.error('Error in axiosData:', error));
  }, []);

  return (
    <Container className="mt-4">
      <h2>Theme Data</h2>
      <Row>
        <Col>
          <Form inline className="mb-4">
            <Form.Control
              type="text"
              placeholder="Enter Game ID"
              value={gameId}
              onChange={(e) => setGameId(e.target.value)}
              className="mr-sm-2"
            />
            <Button variant="primary" onClick={handleSearch}>
              Search Game
            </Button>
          </Form>
          <h3>Game Results:</h3>
          <Row>
            {filteredResults.length === 0 ? (
              <p>No game results found.</p>
            ) : (
              filteredResults.map((game) => (
                <Col md={4} key={game.id}>
                  <Card className="mb-4">
                    <Card.Img variant="top" src={game.background_image} alt={game.name} />
                    <Card.Body>
                      <Card.Title>{game.name}</Card.Title>
                      <Card.Text>Released: {game.released}</Card.Text>
                      <Card.Text>Rating: {game.rating}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Theme;
