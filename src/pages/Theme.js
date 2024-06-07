// src/pages/Theme.js
import { useEffect, useState } from 'react';
import { fetchData } from '../api/fetchData';
import { axiosData } from '../api/axiosData';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Jogos() {
  const [fetchResults, setFetchResults] = useState([]);
  const [axiosResults, setAxiosResults] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      console.log('Fetch Results:', data);
      setFetchResults(data);
    });

    axiosData().then((data) => {
      console.log('Axios Results:', data);
      setAxiosResults(data);
    });
  }, []);

  return (
    <Container className="mt-4">
      <h2>Jogos Data</h2>
      <Row>
        <Col>
          <h3>Fetch Results:</h3>
          <Row>
            {fetchResults.map((item) => (
              <Col md={4} key={item.API}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>{item.API}</Card.Title>
                    <Card.Text>{item.Description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col>
          <h3>Axios Results:</h3>
          <Row>
            {axiosResults.map((post) => (
              <Col md={4} key={post.id}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Jogos;
