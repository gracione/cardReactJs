import React from 'react';
import Card from './components/card/Card';
import './global.css';
import { Cartao, Container } from './styles';

function App() {
  let dadosCard = {
    "cliente" : "carlos",
    "funcionario" : "pedro",
    "tratamento" : "hidra",
    "telefone" : "999998"
  };

  console.log(dadosCard);
  return (
    <Container>
      <Card dados={dadosCard} ></Card>
    </Container>
  );
}
export default App;