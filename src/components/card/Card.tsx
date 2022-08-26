import React from 'react';
import { Cartao } from "./style";

interface tipoDeDados {
  cliente: string;
  funcionario: string;
  tratamento: string;
  telefone: string;
}

function Card({ cliente, funcionario, tratamento, telefone }: tipoDeDados) {
  return (
    <>
      <Cartao>
        <div className='dados-horario'><h2>08:00</h2></div>
        <div className='dados-usuario' >
          <ul>
            <li>cliente: {cliente} </li>
            <li>funcionario: {funcionario}</li>
            <li>tratamento: {tratamento}</li>
            <li>telefone: {telefone}</li>
          </ul>
          <div className='confirmar-desmarcar' >
            <div className='confirmar'>CONFIRMAR</div>
            <div className='desmarcar'>DESMARCAR</div>
          </div>
        </div>
      </Cartao>
    </>
  );
}

export default Card;