import { Cartao } from "./style";

interface tipoDeDados {
  dados: string[];
}

function Card({ dados }: tipoDeDados) {

  return (
    <>
      <Cartao><div className='dados-horario'><h2>08:00</h2></div><div className='dados-usuario' >
        <ul>
        </ul>
      </div></Cartao>
    </>
  );
//  <li>cliente: {cliente}</li>
//  <li>funcionario : {funcionario}</li>
//  <li>tratamento : {tratamento}</li>
//  <li>telefone : {telefone}</li>
}
export default Card;