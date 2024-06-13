// src/pages/About.js
// src/pages/About.js
import { Container } from 'react-bootstrap';

function About() {
  return (
    <Container className="mt-4">
      <h2>Sobre</h2>
      <p>
        <strong>GameApp</strong> é uma plataforma inovadora que permite aos usuários explorar e gerenciar uma ampla variedade de dados sobre jogos. Nossa missão é fornecer uma experiência intuitiva e rica em informações para entusiastas de jogos, desenvolvedores e colecionadores.
      </p>
      <p>
        <strong>Funcionalidades Principais:</strong>
      </p>
      <ul>
        <li>Exploração de jogos: Pesquise e descubra novos jogos através de uma interface amigável.</li>
        <li>Gestão de temas: Alterne entre temas claro e escuro para uma experiência personalizada.</li>
        <li>Informações detalhadas: Acesse dados detalhados sobre jogos, incluindo classificações, datas de lançamento e descrições.</li>
        <li>Integração com APIs: Obtenha dados atualizados em tempo real através da integração com APIs confiáveis de jogos.</li>
      </ul>
      <p>
        <strong>Nosso Objetivo:</strong>
      </p>
      <p>
        Nosso objetivo é criar uma comunidade engajada onde os usuários possam compartilhar suas experiências, avaliações e listas de desejos de jogos. Queremos que o <strong>GameApp</strong> seja sua principal fonte de informações e um ponto de encontro para todos os apaixonados por jogos.
      </p>
      <p>
        <strong>Contato:</strong>
      </p>
      <p>
        Se você tiver alguma dúvida, sugestão ou feedback, não hesite em nos contatar. Estamos sempre abertos a ouvir nossos usuários e melhorar nossa plataforma continuamente.
      </p>
      <p>
        Obrigado por escolher o <strong>GameApp</strong>!
      </p>
    </Container>
  );
}

export default About;
