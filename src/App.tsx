import React from 'react';
import Card from './components/card/Card';
import './global.css';
import { Cartao, Container } from './styles';


class App extends React.Component {
  //  console.log(dadosCard[0].funcionario);
  render() {
    let dadosCard = [{
      "cliente" : "carlos",
      "funcionario" : "pedro",
      "tratamento" : "hidra",
      "telefone" : "999998"
    }];
    return (
      <Container>
        <Card {...dadosCard} />
      </Container>
    );
  }
}
export default App;