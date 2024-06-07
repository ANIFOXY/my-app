import { useState } from 'react';
import { Form as BootstrapForm, Button, Container } from 'react-bootstrap';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jogos, setJogos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, jogos });
  };

  return (
    <Container className="mt-4">
      <BootstrapForm onSubmit={handleSubmit}>
        <BootstrapForm.Group controlId="formName">
          <BootstrapForm.Label>Name</BootstrapForm.Label>
          <BootstrapForm.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </BootstrapForm.Group>
        <BootstrapForm.Group controlId="formEmail">
          <BootstrapForm.Label>Email</BootstrapForm.Label>
          <BootstrapForm.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </BootstrapForm.Group>
        <BootstrapForm.Group controlId="formJogos">
          <BootstrapForm.Label>Jogos</BootstrapForm.Label>
          <BootstrapForm.Control type="text" value={jogos} onChange={(e) => setJogos(e.target.value)} />
        </BootstrapForm.Group>
        <Button variant="primary" type="submit" className="mt-2">Submit</Button>
      </BootstrapForm>
    </Container>
  );
}

export default Form;
