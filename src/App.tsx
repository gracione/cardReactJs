import React from 'react';
import Card from './components/card/Card';
import './global.css';
import { Cartao, Container } from './styles';


function App() {
  let dadosCard = [
    {
      "cliente" : "carlos",
      "funcionario" : "pedro",
      "tratamento" : "hidra",
      "telefone" : "999998"
    },
    {
      "cliente" : "jose",
      "funcionario" : "araujo",
      "tratamento" : "hidra",
      "telefone" : "555998"
    },
  ];
  
    for (let index = 0; index < dadosCard.length; index++) { 
      console.log(dadosCard[index].cliente);
     }
    return (
      <Container>
        <Card
            cliente={dadosCard[0].cliente}
            funcionario={dadosCard[0].funcionario}
            tratamento={dadosCard[0].tratamento}
            telefone={dadosCard[0].telefone}
            />
      </Container>
    );
}
export default App;