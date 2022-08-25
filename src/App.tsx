import React from 'react';
import Card from './Card';
import './global.css';
import { Cartao, Container } from './styles';

function App() {
  return (
    <Container>
      <Card variavel="12dsd" ></Card>
      <Cartao><div className='dados-horario'><h2>08:00</h2></div><div className='dados-usuario' >
        <ul>
          <li>cliente: gracione</li>
          <li>tratamento: chapinha</li>
          </ul>
        </div></Cartao>
      <Cartao><div className='dados-horario'><h2>08:00</h2></div><div className='dados-usuario' >
        <ul>
          <li>cliente: gracione</li>
          <li>tratamento: chapinha</li>
          </ul>
        </div></Cartao>
      <Cartao><div className='dados-horario'><h2>08:00</h2></div><div className='dados-usuario' >
        <ul>
          <li>cliente: gracione</li>
          <li>tratamento: chapinha</li>
          </ul>
        </div></Cartao>
      <Cartao><div className='dados-horario'><h2>08:00</h2></div><div className='dados-usuario' >
        <ul>
          <li>cliente: gracione</li>
          <li>tratamento: chapinha</li>
          </ul>
        </div></Cartao>
      <Cartao></Cartao>
    </Container>
  );
}
export default App;