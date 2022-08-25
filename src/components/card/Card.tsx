import { Cartao } from "./style";

interface tipoDeDados {
  dados: object;
}

function Card({ dados }: tipoDeDados) {
  console.log(dados);

  return (
    <>
      <Cartao><div className='dados-horario'><h2>08:00</h2></div><div className='dados-usuario' >
        <ul>
           <li>cliente: </li>
        </ul>
      </div></Cartao>
    </>
//          <li>funcionario : {dados.funcionario}</li>
//          <li>tratamento : {dados.tratamento}</li>
//          <li>telefone : {dados.telefone}</li>
  );
}
export default Card;