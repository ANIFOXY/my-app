// src/pages/Home.js
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="mt-4">
      <Card className="bg-light p-4">
        <Card.Body>
          <Card.Title>Bem Vindo ao GameApp!</Card.Title>
          <Card.Text>
            O GameApp é seu destino final para informações e temas relacionados a jogos. Explore uma vasta coleção de jogos, obtenha informações detalhadas e personalize sua experiência com nossos temas claros e escuros. Estamos aqui para tornar sua jornada no mundo dos jogos mais divertida e informativa.
          </Card.Text>
          <Card.Text>
            <strong>Funcionalidades:</strong>
          </Card.Text>
          <ul>
            <li>🔍 <strong>Explorar Jogos:</strong> Descubra novos jogos e obtenha informações detalhadas sobre eles.</li>
            <li>🎨 <strong>Temas Personalizáveis:</strong> Alterne entre temas claro e escuro para uma experiência personalizada.</li>
            <li>📅 <strong>Dados Atualizados:</strong> Acesse dados atualizados em tempo real através da integração com APIs confiáveis de jogos.</li>
            <li>📈 <strong>Classificações e Avaliações:</strong> Veja classificações e avaliações de outros jogadores.</li>
          </ul>
          <Card.Text>
            Pronto para começar? Explore nossas seções e descubra tudo o que o GameApp tem a oferecer!
          </Card.Text>
          <Button variant="primary" as={Link} to="/about">
            Saiba Mais
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
