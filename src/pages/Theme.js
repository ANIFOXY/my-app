import { useEffect, useState } from 'react';
import { fetchData } from '../api/fetchData';
import { axiosData } from '../api/axiosData';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function Theme() {
  const [fetchResult, setFetchResult] = useState(null);
  const [axiosResults, setAxiosResults] = useState([]);
  const [gameId, setGameId] = useState('');

  const handleFetch = () => {
    fetchData(gameId)
      .then((data) => {
        console.log('Fetch Result:', data);
        setFetchResult(data);
      })
      .catch((error) => console.error('Error in fetchData:', error));
  };

  useEffect(() => {
    axiosData()
      .then((data) => {
        console.log('Axios Results:', data);
        setAxiosResults(data);
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
            <Button variant="primary" onClick={handleFetch}>
              Fetch Game
            </Button>
          </Form>
          <h3>Fetch Result:</h3>
          {fetchResult ? (
            <Card className="mb-4">
              <Card.Img variant="top" src={fetchResult.background_image} alt={fetchResult.name} />
              <Card.Body>
                <Card.Title>{fetchResult.name}</Card.Title>
                <Card.Text>Released: {fetchResult.released}</Card.Text>
                <Card.Text>Rating: {fetchResult.rating}</Card.Text>
                <Card.Text>{fetchResult.description_raw}</Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <p>No fetch result found.</p>
          )}
        </Col>
        <Col>
          <h3>Axios Results:</h3>
          <Row>
            {axiosResults.length === 0 ? (
              <p>No axios results found.</p>
            ) : (
              axiosResults.map((game) => (
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
