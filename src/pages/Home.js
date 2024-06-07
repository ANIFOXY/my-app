import { Container, Card } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-4">
      <Card className="bg-light p-4">
        <Card.Body>
          <Card.Title>Bem Vindo GameApp!</Card.Title>
          <Card.Text>
          Seu destino final para informações e temas relacionados a jogos.          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
