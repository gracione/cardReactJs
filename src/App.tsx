import React from 'react';
import Card from './components/card/Card';
import './global.css';
import { Container } from './styles';


function App() {
  let dadosCard = [
    {
      "cliente": "carlos",
      "funcionario": "pedro",
      "tratamento": "hidra",
      "telefone": "999998"
    },
    {
      "cliente": "jose",
      "funcionario": "araujo",
      "tratamento": "hidra",
      "telefone": "555998"
    },
  ];

  let card = [];
  for (let index = 0; index < dadosCard.length; index++) {
    card[index] = <Card
      cliente={dadosCard[index].cliente}
      funcionario={dadosCard[index].funcionario}
      tratamento={dadosCard[index].tratamento}
      telefone={dadosCard[index].telefone}
    />;
  }

  return (
    <Container>
      {card}
    </Container>
  );
}
export default App;