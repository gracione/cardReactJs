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
        <div className='dados-horario'>
          <div className="horario" >08:00</div>
          </div>
        <div className='dados-usuario' >
          <ul>
            <li><h2>cliente: {cliente}</h2></li>
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